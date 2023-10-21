module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-prettier'
	],
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use.
			version: 'detect'
		},
		// Tells eslint how to resolve imports
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
			},
			alias: {
				map: [['@', './src']],
				extensions: ['.js', '.jsx', '.ts', '.tsx', 'json']
			}
		}
	},
	plugins: ['@typescript-eslint', 'simple-import-sort', 'react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		// simple import sort
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error'
	}
}
