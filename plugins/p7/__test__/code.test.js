const babel = require('@babel/core');
const plugin = require('../babel-plugin-p7');

const srcCode = `function square(n) {
  return n * n;
}`;

it('works', () => {
  const { code } = babel.transformSync(srcCode, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});

it('has variableDeclaration is match square', () => {
  const { ast } = babel.transformSync(srcCode, { plugins: [plugin], ast: true });
  const program = ast.program;
  const declaration = program.body[0].declarations[0];
  expect(declaration.id.name).toMatch(/square/);
});

// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);           // This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });