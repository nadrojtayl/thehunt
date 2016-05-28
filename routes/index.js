var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testfrontpage', { title: 'Express' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Express' });
});

router.post('/hunterjoin',function(req,res,next){
	//renders page hunterjoin with email user sent
		res.render('hunterjoin.jade',{email: req.body.HunterEmail});
	var emailinput = document.getElementById("HunterEmail")
	emailinput.appendChild(document.createTextNode("That was not a valid email address"));
	console.log("Not a valid email address");
});

router.get('/testfrontpage',function(req,res,next){
	res.render('testfrontpage');
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
			client.query(query,function(err,result){
				if(err){throw err;}
				
				console.log(result);
			})
		
		})
	}
		
		pg.connect(postgresdatabaseaddress,function(err,client){
			if(err){throw err;}
			var query = "SELECT * from scavhunters";
			client.query(query,function(err,results){
				if(err){throw err;}
				res.render('thankyou',{huntdate:"",users:JSON.stringify(results.rows)});
			})
		});
	})




module.exports = router;
