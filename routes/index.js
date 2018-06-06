var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://yko0630:f0malhaut@ds249530.mlab.com:49530/trip_data',['login']);

//Get All logins
router.get('/', function(req, res, enxt){
    db.login.find(function(err, logins){
        if (err){
            res.send(err);
        }
        res.json(logins);
    });
});

//Get single loging
router.get('/:id', function(req, res, enxt){
    db.login.findOne({_id: mongojs.ObjectID(req.params.id)}, function(err, login){
        if (err){
            res.send(err);
        }
        res.json(login);
    });
});
module.exports = router;