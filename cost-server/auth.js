//Validation middleware

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("872307146218-vuchuho1la6ultt5cevn1us9uk4s8hfq.apps.googleusercontent.com");
  
var verifyToken=async function(req,res,next) {
    const ticket = await client.verifyIdToken({
        idToken: req.body.idtoken,
        audience: "872307146218-vuchuho1la6ultt5cevn1us9uk4s8hfq.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    //const userid = payload['sub'];
    console.log(payload['email']);
}

var verify=async function(req,res,next){
    verifyToken(req,res,next).catch(res.status(401).send());
}
  
module.exports = verify;