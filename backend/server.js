const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT;

const app = express();
// All to accept body raw (json) data from postman
app.use(express.json());
// All to accept urlencoded data from postman
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
// overriding the errorhandler (displays information in postman for example, and to do so, we create errorMiddleware.js)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
