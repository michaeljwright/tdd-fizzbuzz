const express = require("express");
const fizzbuzz = require("./src/fizzbuzz");

const app = express();

app.get("/", function(req, res) {
  const output = fizzbuzz.run(1, 15);

  for (let i = 0; i < output.length; i++) {
    let result = "";
    for (let y = 0; y < output[i].length; y++) {
      result += output[i][y];
    }
    console.log(result);
  }

  res.send(output);
});

// module.exports = app;
app.listen(3001);
