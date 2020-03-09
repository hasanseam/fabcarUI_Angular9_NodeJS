// ExpressJS Setup
const express = require('express');
const Joi = require('@hapi/joi'); //for json validation
const app = express();
var bodyParser = require('body-parser');
// Constants
var os = require("os");
var hostname = os.hostname();

const HOST = hostname; //'localhost';
const PORT = 8080;

app.use(express.json()); //for parsing json request

const query = require('./queryServer.js');

//Fix the CORS Error — and How the Access-Control-Allow-Origin Header Works
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
 });

app.post('/api/invoke',(req,res)=>{
   const schema = Joi.object({
      name:Joi.string().min(3),
      make:Joi.string(),
      model:Joi.string(),
      colour:Joi.string(),
      owner:Joi.string()
  });
  const {error} = schema.validate(req.body);
  if(error) {
   res.status(400).send(error.details[0].message);
   return;
   }
     const carObj = {
        "make":req.body.make,
        "model":req.body.model,
        "colour":req.body.colour,
        "owner":req.body.owner
     }
     console.log(carObj.make);
     res.send(req.body.make);
}) 

//Attach the middleware
//app.use( bodyParser.json() );
app.get('/api/query', function (req, res) {
     const b = query.queryFunc();
     let carData = [];
     b.then(x=>{
        carData = x;
        res.send(carData); 
        //res.send(JSON.stringify(x));
     });
     	
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);