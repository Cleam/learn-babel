module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path, state) {
        console.log(state);
      },
    },
  };
};
