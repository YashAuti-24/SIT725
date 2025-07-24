var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {

  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  
  const sum = a + b;
  
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.get('/square', (req, res) => {
const num = parseFloat(req.query.num);
const square = num * num;
res.send(`The square of ${num} is: ${square}`);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});