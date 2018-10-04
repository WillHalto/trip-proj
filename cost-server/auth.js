//Validation middleware

require('dotenv').config();
var express = require('express');
var router = express.Router();


const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

//The initial login, sets the cookie with google jwt
router.post('/login',async function(req,res,next){
    setHeaders(req,res);
    let date = new Date();
    let payload = await verifyToken(req.body.idtoken).catch(console.error);
    if(payload['exp']>Math.round(date.getTime() / 1000)){
        res.cookie("IDTOKEN", req.body.idtoken, {httpOnly:true});
        res.send();
    }
    else{
        res.status(401).send();
    }
});

//Everything other than login post will use this
router.use(async function(req,res,next){
    setHeaders(req,res);
    let date = new Date();
    const { IDTOKEN } = req.cookies;
    let payload = await verifyToken(IDTOKEN).catch(console.error);
    if(payload['exp']>Math.round(date.getTime() / 1000)){
        next();
    }
    else{
        res.status(401).send();
    }
});



//Helper to set the headers for the response
var setHeaders=function(req,res){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
}

//Verify the id token with google api
var verifyToken=async function(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    //const userid = payload['sub'];
    //console.log(payload['email']);
    return payload;
}


  
module.exports = router;