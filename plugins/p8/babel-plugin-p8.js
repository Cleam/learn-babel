module.exports = function ({ types: t }) {
  return {
    pre(state) {
      this.cache = new Map();
    },
    visitor: {
      FunctionDeclaration(path, state) {
        console.log('[visitor]', state.opts);
        console.log('[visitor]', this.cache);
      },
    },
    post(state) {
      console.log('[post]', this.cache);
    },
  };
};
