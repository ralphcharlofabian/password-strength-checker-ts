
import ColorBlocks from ".";

const sum = require('./index');


test('initial test if working', () => {
  expect(true).toBe(true);
});

test('initial test', () => {
  expect(true).toBe(true);
});

test('Component not crashing',()=> {
  const propsInitial = [{ passwordScore: 4, passwordLength: 10 }];
  const finState = ColorBlocks(propsInitial);
  expect(finState).toEqual(ColorBlocks(propsInitial));
})
