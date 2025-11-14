const express = require("express");
const router = express.Router();
const getContain = require("../controllers/getContain");
router.route("/get_contain").get(getContain.getContain);
module.exports = router;
