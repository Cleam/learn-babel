const babel = require('@babel/core');
const plugin = require('../babel-plugin-p5');

const srcCode = `function square(n) {
  return n * n;
}`;

it('works', () => {
  const { code } = babel.transformSync(srcCode, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});
