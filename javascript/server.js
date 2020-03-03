// ExpressJS Setup
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// Constants
const PORT = 8080;
const HOST = 'localhost';


const query = require('./queryServer.js');


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