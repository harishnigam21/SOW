const express = require("express");
const router = express.Router();
const Auth = require("../controllers/Auth");
const jwtVerifier = require("../middlewares/jwtVerifier");
router.route("/login").post(jwtVerifier, Auth.SignIn);
module.exports = router;
