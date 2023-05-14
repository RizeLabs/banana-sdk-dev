// const { ProvidePlugin } = require('webpack');

// module.exports = function (config, env) {
//     return {
//         ...config,
//         module: {
//             ...config.module,
//             rules: [
//                 ...config.module.rules,
//                 {
//                     test: /.(m?js|ts|tsx)$/,
//                     enforce: 'pre',
//                     use: ['source-map-loader'],
//                 },
//             ],
//         },
//         plugins: [
//             ...config.plugins,
//             new ProvidePlugin({
//                 process: 'process/browser',
//             }),
//             new ProvidePlugin({
//                 Buffer: ["buffer", "Buffer"],
//             }),
//         ],
//         resolve: {
//             ...config.resolve,
//             fallback: {
//                 assert: require.resolve('assert'),
//                 buffer: require.resolve('buffer'),
//             },
//         },
//         ignoreWarnings: [/Failed to parse source map/],
//     };
// };

const { ProvidePlugin }= require("webpack")

module.exports = function override(config, env) {
  //do stuff with the webpack config...
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
    // fs: require.resolve("fs-extra"),
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
  config.module = {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
          }
        },        
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  }

  return config
}