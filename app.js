const express = require("express");
const router = express.Router();
const app = express();
const session = require("express-session");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const htmlRoutes = require("./backend/routes/htmlRoutes");

mongoose.set("useFindAndModify",false);
mongoose.set("useUnifiedTopology",true);
mongoose.connect("mongodb+srv://ajay:ajay@cluster0-dluea.mongodb.net/tvastra", { useNewUrlParser: true });


app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "ajay",
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      httpOnly: true,
      secure: false,
      maxAge: null
    }
  })
);
app.set("views", __dirname + "/client/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "client")));
app.use(logger("dev"));
app.use("/", htmlRoutes);
module.exports = app;
