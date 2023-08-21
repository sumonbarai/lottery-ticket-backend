const createError = ({ message = "Resource not found", status = 404 }) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { createError };
