const express = require("express");
const router = express.Router();
const Verfy = require("../controllers/Verify");
const jwtVerifier = require("../middlewares/jwtVerifier");

router.route("/verify").get(jwtVerifier, Verfy.verifyUser);
module.exports = router;
