## @rize-labs/banana-wallet-sdk

### Documentation: [here](https://banana-wallet-docs.rizelabs.io/)

### Setting up
To start using the sdk into your react-app follow the below steps on top of your existing react-app configuration.

1. Install `react-app-rewired` as a dependency via.
```
yarn add react-app-rewired or npm install react-app-rewired
```

2. Create a `config-overrides.js` with the below configurations to fix polyfill issues.
```
const { ProvidePlugin }= require("webpack")

module.exports = {
  webpack: function (config, env) {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
      }
      return rule;
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      process: require.resolve("process"),
      os: require.resolve("os-browserify"),
      path: require.resolve("path-browserify"),
      constants: require.resolve("constants-browserify"), 
      fs: false
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
      ...config.plugins,
      new ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new ProvidePlugin({
          process: ["process"]
      }),
    ]
    return config;
  },
}
```

3. Change `package.json` accordingly to use with `react-app-rewired`
```
react-scripts start -> react-app-rewired start,
react-scripts build -> react-app-rewired build,
react-scripts test -> react-app-rewired test,
```

4. Install packages required in `config-overrides` accordingly using the below command.
```
yarn add stream-browserify constants-browserify crypto-browserify os-browserify path-browserify process stream-browserify
```
OR
```
npm install stream-browserify constants-browserify crypto-browserify os-browserify path-browserify process stream-browserify
```
5. Restart your app with `yarn start` or `npm start`.
