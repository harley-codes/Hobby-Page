import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	...compat.config({
		rules: {
			'array-bracket-newline': ['error', 'consistent'],
			indent: [
				'error',
				'tab',
				{
					ArrayExpression: 1,
					SwitchCase: 1,
				},
			],
			'linebreak-style': ['error', 'unix'],
			'unicode-bom': ['error', 'never'],
			quotes: ['error', 'single'],
			'array-bracket-spacing': ['error', 'never'],
			'brace-style': ['error', 'allman', { allowSingleLine: true }],
			semi: ['error', 'never'],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	}),
]

export default eslintConfig
