exports.run = function(min, max) {
  var output = [];

  for (var i = min; i <= max; i++) {
    output.push(exports.getResult(i));
  }

  return output;
};

exports.getResult = function(value) {
  var results = [];
  if (value % 3 === 0) results.push("Fizz");
  if (value % 5 === 0) results.push("Buzz");
  if (!results.length) results.push(value);
  return results;
};
