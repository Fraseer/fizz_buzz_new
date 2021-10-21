require_relative '../src/fizz_buzz'

describe FizzBuzz do
  subject { FizzBuzz.new }

  it 'is expected to return a integer if non of the game rules apply' do
    expect(subject.check(1)).to eq(1)
  end

  it 'is expected that 3 will return fizz' do
    expect(subject.check3).to eq 'fizz'
  end

  it 'is expected that 5 will return buzz' do
    expect(subject.check5).to eq 'buzz'
  end

  it 'is expected that 15 will return fizz-buzz' do
    expect(subject.check15).to eq 'fizz-buzz'
  end
end
