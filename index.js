const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const { coonectdb } = require("./helper/connectdb");
const cors = require("cors");
const app = express();
const { PORT } = require("./helper/utils");

const router = require('./app/route')
//connecting the database
coonectdb();



app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router)
//error handler
app.use((req, res, next) => {
  const error = new Error(" api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log("server connected", port);
});
