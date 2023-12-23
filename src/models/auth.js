const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const model = new Schema(
  {
   password:String
  },
  { timestamps: true, versionKey: false, strict: false }
);

const UserModule = mongoose.model("auths", model);

module.exports = UserModule;
