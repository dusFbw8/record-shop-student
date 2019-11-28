const express = require("express");
const router = express.Router();
//shortid
var { getRecords, pushRecord } = require("../userController");
var {
  getRecords,
  pushRecord,
  getRecordsId,
  deleteRecordsId,
  putRecord
} = require("../userController");
/* GET users listing. */
router.get("/records", getRecords);
/* POST users listing. */
router.post("/records", pushRecord);
router.get("/records/:id", getRecordsId);
router.delete("/records/:id", deleteRecordsId);
router.put("/records/:id", putRecord);
module.exports = router;
