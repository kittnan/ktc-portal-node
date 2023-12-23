let express = require("express");
let router = express.Router();
var mongoose = require("mongodb");
const { ObjectId } = mongoose;
const SLOGAN = require("../models/slogan");

router.get("", async (req, res, next) => {
  try {
    let {status} = req.query
    let con = [
      {
        $match:{}
      }
    ]
    if(status){
      status = JSON.parse(status)
      con.push({
        $match:{
          status:status
        }
      })
    }
    const data = await SLOGAN.aggregate(con)
    res.json(data)
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.sendStatus(500);
  }
})

router.post("/createOrUpload", async (req, res, next) => {
  try {
    if(req.body._id){
      const resData = await SLOGAN.updateOne({
        _id:new ObjectId(req.body._id)
      },req.body)
      res.json(resData)
    }else{
      const resData = await SLOGAN.insertMany(req.body)
      res.json(resData)
    }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    res.sendStatus(500);
  }
})


module.exports = router;
