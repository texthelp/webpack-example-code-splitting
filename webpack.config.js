module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
	chunkFilename: '[name].bundle.js',
	path: __dirname+"/dist",
  }
};
