module.exports = {
	parser: require( 'postcss-comment' ),
	plugins: [
		require( 'postcss-preset-env' )( {
			browsers: 'last 2 versions',
		} ),
		require( 'postcss-sort-media-queries' ),
	],
};
