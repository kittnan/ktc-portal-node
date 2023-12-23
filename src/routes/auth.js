let express = require("express");
let router = express.Router();
var mongoose = require("mongodb");
const { ObjectId } = mongoose;
const AUTH = require("../models/auth");

router.get("", async (req, res, next) => {
  try {
    let con = [
      {
        $match:{}
      }
    ]
    const data = await AUTH.aggregate(con)
    res.json(data)
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.sendStatus(500);
  }
})




module.exports = router;
