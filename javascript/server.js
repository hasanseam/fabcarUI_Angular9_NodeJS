// ExpressJS Setup
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// Constants
var os = require("os");
var hostname = os.hostname();

const PORT = 8080;
const HOST = hostname; //'localhost';


const query = require('./queryServer.js');

//Fix the CORS Error — and How the Access-Control-Allow-Origin Header Works
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
 });

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