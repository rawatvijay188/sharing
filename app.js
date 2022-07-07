const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})

// var jsonParser =bodyParser.json();

app.post('/logthis',(req,res)=>{
  const name1 = req.body.name;
  const tolog= `My name is ---->${name1}`;
  // console.log("tolog",tolog);
  // console.log(req.body);
  res.send(tolog)
})

// app.listen(3000)
module.exports =app

