var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frontpage', { title: 'Express' });
});

router.post('/hunterjoin',function(req,res,next){
	if (req.body.HunterEmail)
	console.log(req.body);
	//renders page hunterjoin with email user sent
	res.render('hunterjoin.jade',{email: req.body.HunterEmail});
});


//once user has submitted information, charges credit card, checks if payment was success, adds to database, and then renders a page thank you
//may need to update body parser
router.post('/adduser',function(req,res,next){
	console.log(req.body);
	//charges credit card information
	if (1===1){
		//connect to postgres
		var postgresdatabaseaddress = "postgres://uxvkwaqcfgmabv:y7W_-dHMjxjw8uHGKoT7LPqkkV@ec2-204-236-228-133.compute-1.amazonaws.com:5432/dei7louc1tbqft";
		pg.defaults.ssl = true;
		//hunter table columns: user, then email, then phonenumber
		pg.connect(postgresdatabaseaddress,function(err,client){
			if(err){
				throw err;
			}
			var query = "INSERT INTO scavhunters VALUES(" + "'" + req.body.huntername + "'" + "," + "'" + req.body.email + "'" + "," + "'" + req.body.phonenumber + "'" + ")";
			console.log(query);
			client.query(query,function(err,result){
				if(err){throw err;}
				
				console.log(result);
			})
		
		res.render('thankyou',{huntdate:""});
		})
	}
})

module.exports = router;
