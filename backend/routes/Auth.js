const express = require("express");
const router = express.Router();
const Auth = require("../controllers/Auth");
router.route("/login").post(Auth.SignIn);
module.exports = router;
