const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = './scripts/eslint-rules/custom';

module.exports = {
  overrides: [
    {
      files: '**/*.js',
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        node: true,
        browser: true,
      },
      extends: ['eslint:recommended', 'prettier'],
      rules: {
        'rulesdir/emotion-in-function': 'error',
      },
    },
    {
      files: '**/*.{ts,tsx}',
      env: {
        browser: true,
        node: true,
      },
      extends: [
        require.resolve('@contentful/experience-eslint/index.js'),
        require.resolve('@contentful/experience-eslint/type-checking.js'),
        require.resolve('@contentful/experience-eslint/react.js'),
        require.resolve('@contentful/experience-eslint/lodash.js'),
        require.resolve('@contentful/experience-eslint/jsx-a11y.js'),
        require.resolve('@contentful/experience-eslint/import.js'),
      ],
      parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
        createDefaultProgram: true,
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        'rulesdir/emotion-in-function': 'error',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        'import/no-default-export': 'off',
        'react/jsx-handler-names': 'off',
      },
    },
    {
      files: '**/*.spec.{ts,tsx,js,jsx}',
      env: {
        browser: true,
        node: true,
      },
      extends: [
        require.resolve('@contentful/experience-eslint/index.js'),
        require.resolve('@contentful/experience-eslint/type-checking.js'),
        require.resolve('@contentful/experience-eslint/jest.js'),
        require.resolve('@contentful/experience-eslint/import.js'),
      ],
      parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
        createDefaultProgram: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect*', 'K.assert*'],
          },
        ],
      },
    },
  ],
};
