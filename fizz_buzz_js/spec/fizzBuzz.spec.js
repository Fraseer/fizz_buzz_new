const FizzBuzz = require("../src/fizzBuzz");

const subject = new FizzBuzz();

describe("FizzBuzz", () => {
  it("is expected to return a integer if non of the game rules apply", () => {
    expect(subject.check(1)).toEqual(1);
  });

  it("is expected that 3 will return fizz", () => {
    expect(subject.check(3)).toEqual("Fizz");
  });

  it("is expected that 5 will return buzz", () => {
    expect(subject.check(5)).toEqual("Buzz");
  });

  it("is expected that 15 will return fizz-buzz", () => {
    expect(subject.check(15)).toEqual("Fizz-Buzz");
  });
});
