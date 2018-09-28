//Validation middleware

require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  
var verifyToken=async function(req,res,next) {
    const ticket = await client.verifyIdToken({
        idToken: req.body.idtoken,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    //const userid = payload['sub'];
    console.log(payload['email']);
}

var verify=async function(req,res,next){
    verifyToken(req,res,next).catch(res.status(401).send());
}
  
module.exports = verify;