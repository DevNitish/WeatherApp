var express = require('express');
var app = express();
var bodyParser = require('body-parser');
router=express.Router();
var request = require("request");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/getweather',function(req,res,next){
   		console.log("Hit Server ",req.body.city);
		var options = { method: 'GET',
		  url: 'http://api.openweathermap.org/data/2.5/forecast',
		  qs: 
		   { q: req.body.city+',in',
		     units: 'metric',
		     APPID: 'fc58ba73fc193a3d2fdf7f1e0f35d074'
				 }		  
				};

		request(options, function (error, response, body) {
		  if (error){ 
		  	res.send(error);
		  	throw new Error(error);
		  }
			res.send(body);
		 
		});
   
});
module.exports = router;
module.exports = app;
