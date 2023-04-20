module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	// ESLint 預設警告是紅色 (danger) 顯示。
	// Prettier 預設警告也是紅色 (danger) 顯示，不跟 ESLint 混淆，因此改成黃色 (warning) 顯示。
	rules: { 'prettier/prettier': 'warn', 'react/react-in-jsx-scope': 'off' }
};
