const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const route = require("./route");
const app = express();

// security middleware
app.use(require("./middleware"));

// route setup
app.use("/api/v1", route);

// error handling
app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
