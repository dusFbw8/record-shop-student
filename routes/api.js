const express = require("express");
const router = express.Router();
//shortid
var { getUsers } = require("../controllers/userController");
var { getOrders } = require("../controllers/OrderController");
var { getRecords } = require("../controllers/RecordController");
/* var {
  getRecords,
  getUsers,
  getOrders,
  postRecord,
  getRecordsId,
  deleteRecordsId,
  putRecord
} = require("../controllers/userController"); */

/* GET users listing. */
router.get("/records", getRecords);
router.get("/users", getUsers);
router.get("/orders", getOrders);
/* POST users listing. */
/* router.post("/records", postRecord);
router.get("/records/:id", getRecordsId);
router.delete("/records/:id", deleteRecordsId);
router.put("/records/:id", putRecord); */
module.exports = router;
