require("dotenv").config();
let express = require("express");
let router = express.Router();

/**
 * Google OAUTH 2 client used to authenticat IDTOKEN from client
 */
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * The initial login, sets the cookie with google jwt
 */
router.post("/api/login", async function(req, res, next) {
  let date = new Date();
  let payload = await verifyToken(req.body.idtoken).catch(console.error);
  if (payload["exp"] > Math.round(date.getTime() / 1000)) {
    res.cookie("IDTOKEN", req.body.idtoken, { httpOnly: true });
    res.status(200).send();
  } else {
    res.status(401).send();
  }
});

/**
 * Log out, clear cookie
 */
router.post("/api/logout", async function(req, res, next) {
  res.clearCookie("IDTOKEN", { expires: new Date(0), httpOnly: true });
  res.status(200).send();
});

/**
 * All other requests use this, checks for IDTOKEN and verifies with google.
 */
router.use(async function(req, res, next) {
  let date = new Date();
  const { IDTOKEN } = req.cookies;
  let payload = await verifyToken(IDTOKEN).catch(console.error);
  if (!payload) {
    res.status(401).send();
  } else if (payload["exp"] > Math.round(date.getTime() / 1000)) {
    req.googlePayload = payload;
    next();
  } else {
    res.status(401).send();
  }
});

/**
 * Verify IDTOKEN passed in cookie with google oauth client
 * @param token The IDTOKEN included in the request cookie
 */
let verifyToken = async function(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  });
  const payload = ticket.getPayload();
  return payload;
};

module.exports = router;

// let setHeaders = function(req, res) {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
// };

/**
 * Allow content types, credentials, methods for preflight OPTIONS request
 * Needed to enable CORS
 */
// router.options("/*", function(req, res, next) {
//   setHeaders(req, res);
//   res.status(200).send();
// });
