const express = require("express");
const router = express.Router();
const Verfy = require("../controllers/Verify");
router.route("/verify").get(Verfy.verifyUser);
module.exports = router;
