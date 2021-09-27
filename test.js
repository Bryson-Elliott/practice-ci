const { getGreeting, getSum } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Get sum answers', () => {
  expect(getSum(1,2)).toEqual(3)
})