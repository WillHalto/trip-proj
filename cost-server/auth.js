//Validation middleware

require('dotenv').config();
var express = require('express');
var router = express.Router();

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


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

var setHeaders=function(req,res){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
}
      
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