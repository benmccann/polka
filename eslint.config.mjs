import n from 'eslint-plugin-n'

export default [
  { files: ['**/*.js'] },
  {
    plugins: { n },
    rules: {
      'n/prefer-node-protocol': 'error'
    }
  },
  {
    ignores: ['examples/']
  }
];
