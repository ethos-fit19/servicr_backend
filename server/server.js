const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("passport");
const bodyParser = require("body-parser");

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middleware
const loginRoutes = require("./routes/login.routes");
app.use("/login", loginRoutes);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

//config
const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(
    `Servicr server online in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
