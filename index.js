let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let morgan = require("morgan");
let mongoose = require("mongoose");
let compression = require("compression");
let apicache = require("apicache-plus");

mongoose.set("strictQuery", false);

const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log("PORT:", process.env.PORT);
let mongooseConnect = require("./connect");
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log("Listening on  port " + server.address().port);
});

app.use(morgan("tiny"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());
app.use(compression());

let PORTAL = require("./src/routes/portal");
app.use("/portal", PORTAL);

let AUTH = require("./src/routes/auth");
app.use("/auth", AUTH);

let SLOGAN = require("./src/routes/slogan");
app.use("/slogan", SLOGAN);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST ,PUT ,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-with,Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

module.exports = app;
