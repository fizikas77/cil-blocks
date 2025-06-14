module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		'no-console': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector:
					"CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
				message: 'Unexpected property on console object was called',
			},
		],
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-key': 'off',
	},
};
