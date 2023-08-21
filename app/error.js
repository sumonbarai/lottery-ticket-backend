const { createError } = require("../src/utilities/createError");

const notFoundHandler = (_req, _res, next) => {
  const error = createError({ message: "No Route Found", status: 404 });
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: "something went wrong" });
};

module.exports = { notFoundHandler, errorHandler };
