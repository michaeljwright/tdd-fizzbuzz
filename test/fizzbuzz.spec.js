var assert = require('assert');

var fizzbuzz = require('../src/fizzbuzz');

function assertExists(array, string, msg) {
  assert.ok(array.indexOf(string) > -1, msg);
}

describe('FizzBuzz', function() {
  it('should return a list of the correct size', function() {
    var output = fizzbuzz.run(1, 5);
    assert.strictEqual(output.length, 5);
  });
  it('should return the appropriate results for 1-15', function() {
    var output = fizzbuzz.run(1, 15);
    assert.deepEqual(
      output,
      [
        [1],
        [2],
        ['Fizz'],
        [4],
        ['Buzz'],
        ['Fizz'],
        [7],
        [8],
        ['Fizz'],
        ['Buzz'],
        [11],
        ['Fizz'],
        [13],
        [14],
        ['Fizz', 'Buzz']
      ]
    );
  });
  describe('getResult', function() {
    it('should return 1 for 1', function(){
      assert.deepEqual(fizzbuzz.getResult(1), [1]);
    });

    it('should return Fizz for multiples of 3', function(){
      assertExists(fizzbuzz.getResult(3), 'Fizz');
      assertExists(fizzbuzz.getResult(6), 'Fizz');
      assertExists(fizzbuzz.getResult(9), 'Fizz');
    });

    it('should return Buzz for multiples of 5', function(){
      assertExists(fizzbuzz.getResult(5), 'Buzz');
      assertExists(fizzbuzz.getResult(10), 'Buzz');
      assertExists(fizzbuzz.getResult(15), 'Buzz');
    });

    it('should return all results when there is more than 1 multiple', function(){
      assert.deepEqual(fizzbuzz.getResult(15), ['Fizz', 'Buzz']);
    });
  });
});
