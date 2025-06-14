const config = require( '@wordpress/prettier-config' );

module.exports = {
	...config,
	singleQuote: true,
	printWidth: 120,
	overrides: [
		{
			files: [ 'source/scripts/**/*.js', 'source/scripts/**/*.jsx' ],
		},
	],
};
