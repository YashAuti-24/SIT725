var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
{
title: "Geelong campus",
image: "deakin2.png",
link: "About this campus",
},
{
title: "Warrnambool campus",
image: "deakin3.png",
link: "About this campus",
}
]
app.get('/api/projects',(req,res) => {
res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})
