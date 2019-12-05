/* *
 * Created by render on 2019/11/28
 * */
const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry: './index.js',
    output: {
      filename: 'json2xlsx.min.js',
      libraryTarget: "umd",
      path: path.resolve(__dirname, 'dist'),
    },
  },
];
