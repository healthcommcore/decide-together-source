import { arrayFrom } from '../utilities';

it('Should return an array of 10 numbers (1-10) with 1 param', () => {
  const test = [1,2,3,4,5,6,7,8,9,10];
  const result = arrayFrom(10);
  expect(result.length).toBe(10);
  expect(result.every( (num, i) => test[i] === num)).toBeTruthy();
});

it('Should return an array of 8 numbers (4-11) with 2 params', () => {
  const test = [4,5,6,7,8,9,10,11];
  const result = arrayFrom(4, 11);
  expect(result.length).toBe(8);
  expect(result.every( (num, i) => test[i] === num)).toBeTruthy();
});

it('Should return an empty array with no params', () => {
  const result = arrayFrom();
  expect(result.length).toBe(0);
});
