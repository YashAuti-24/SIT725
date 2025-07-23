var express = require("express")
var app = express()
var port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, Express is running!");
});
app.listen(port,()=>{
console.log("App running on port: "+port)
})
