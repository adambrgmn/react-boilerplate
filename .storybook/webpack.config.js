const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
