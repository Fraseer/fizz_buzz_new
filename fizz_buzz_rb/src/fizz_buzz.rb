class FizzBuzz

  def check(value)
    value%15 == 0 ? "Fizz-Buzz" : value%5 == 0 ? "Buzz" : value%3 == 0 ? "Fizz" : value
  end
end