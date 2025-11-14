const express = require("express");
const router = express.Router();
const jwtVerifier = require("../middlewares/jwtVerifier");
const Service = require("../controllers/Service");
router.route("/getRecords").get(jwtVerifier, Service.getRecord);
router.route("/updateRecords").put(jwtVerifier, Service.updateRecord);
router.route("/updateData").put(jwtVerifier, Service.onBlurUpdate);
module.exports = router;
