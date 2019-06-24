var assert = require('assert');

var formatter = require('../../src/formatter/plaintext');

describe('plaintext formatter', function() {
  it('should return a formatted string from structured data', function() {
    var string = formatter.format([[1],[2],['a','b']]);
    assert.deepEqual(string, "1\n2\nab");
  });
});
