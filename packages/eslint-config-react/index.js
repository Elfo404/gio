module.exports = {
  extends: [
    '@elfo404/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
