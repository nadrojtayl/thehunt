var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hunterjoin',function(req,res,next){
	
	//renders page hunterjoin with email user sent
	res.render('/hunterjoin',{email: req.body.email});
});


//once user has submitted information, charges credit card, checks if payment was success, adds to database, and then renders a page thank you
//may need to update body parser
router.post('/adduser',function(req,res,next){
	//charges credit card information
	if (payment = wassuccessful){
		//connect to postgres
		var postgresdatabaseaddress = "";
		pg.defaults.ssl = true;
		pg.connect(postgresdatabaseaddress,function(err,client){
			if(err){
				throw err;
			}
			var query = "INSERT INTO hunters VALUES(" + req.body.huntername + "," + req.body.email + "," + req.body.phonenumber +")";
			client.query(query,function(err,result){
				console.log(result);
			}
		
		res.render('/thankyou',{huntdate:});
	}
}

module.exports = router;
