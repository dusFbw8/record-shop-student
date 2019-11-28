const express = require("express");
const router = express.Router();
//shortid
var { getRecords, pushRecord } = require("../userController");

/* GET users listing. */
router.get("/records", getRecords);
/* POST users listing. */
router.post("/records", pushRecord);
module.exports = router;
