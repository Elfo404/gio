module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@elfo404/eslint-config',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
