class FizzBuzz {
  check(value) {
    //1st operator checks if /3, if true goes to 2nd operator checks if /5, if true its /3 & /5 === Fizz Buzz,
    // if not must be Fizz
    //If first operator is false goes to 3rd operator, checks if /5, Buzz if true, returns value if false
    return value % 3 === 0 ? value % 5 === 0 ? "Fizz-Buzz" : "Fizz" : value % 5 === 0 ? "Buzz" : value;
  }
}

module.exports = FizzBuzz;
