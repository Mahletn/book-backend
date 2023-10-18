const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routes/book");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = 5000;

//setup our server
app.listen(PORT, () => {
  console.log(`server is up and running in local host ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Database connection is successful!"))
  .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());
app.use("/api/book", bookRouter);