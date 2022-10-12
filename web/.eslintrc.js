module.exports = {
    extends: [
      // By extending from a plugin config, we can get recommended rules without having to add them manually.
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
      // Make sure it's always the last config, so it gets the chance to override other configs.
      'eslint-config-prettier',
    ],
    settings: {
      react: {
        // Tells eslint-plugin-react to automatically detect the version of React to use.
        version: 'detect',
      },
      // Tells eslint how to resolve imports
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'warn',
        'prettier/prettier': 'warn',
        'react-hooks/rules-of-hooks': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-restricted-globals': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        'import/first': 'warn',
      },
  };