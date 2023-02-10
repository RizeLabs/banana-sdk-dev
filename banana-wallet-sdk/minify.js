const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const directory = 'dist/';

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk(directory, (err, files) => {
  if (err) {
    console.error(`Could not list the directory.\n${err}`);
    process.exit(1);
  }

  files.forEach(file => {
    if (file.endsWith('.js')) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(`Could not read file.\n${err}`);
          process.exit(1);
        }

        const result = UglifyJS.minify(data);
        if (result.error) {
          console.error(`Could not minify file.\n${result.error}`);
          process.exit(1);
        }

        fs.writeFile(file, result.code, err => {
          if (err) {
            console.error(`Could not write file.\n${err}`);
            process.exit(1);
          }

          console.log(`Minified ${file}.`);
        });
      });
    }
  });
});