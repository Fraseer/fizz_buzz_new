class FizzBuzz

  def check(value)
     value % 3 == 0 ? value % 5 == 0 ? "Fizz-Buzz" : "Fizz" : value % 5 == 0 ? "Buzz" : value;
  end
end