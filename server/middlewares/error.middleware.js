const fs = require('fs');
const path = require('path');
const {
  CustomError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  BadRequestError,
} = require('../exceptions/errors');
const moment = require('moment');

/**
 * Middleware function to handle errors.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function errorMiddleware(err, req, res, next) {
  console.log(err);

  // Set a default status code and error message
  const statusCode = err.statusCode || 500;
  let errorMessage = 'Internal Server Error';

  // Customize the error response based on the error type
  if (err instanceof CustomError) {
    // statusCode = err.statusCode;
    errorMessage = err.message;
  } else if (err instanceof ValidationError) {
    // statusCode = 422;
    errorMessage = err.message;
  } else if (err instanceof NotFoundError) {
    // statusCode = 404;
    errorMessage = err.message;
  } else if (err instanceof UnauthorizedError) {
    // statusCode = 401;
    errorMessage = err.message;
  } else if (err instanceof ForbiddenError) {
    // statusCode = 403;
    errorMessage = err.message;
  } else if (err instanceof BadRequestError) {
    // statusCode = 400;
    errorMessage = err.message;
  }

  // Log the error if statusCode is 500
  if (statusCode === 500) {
    const logsFolder = path.join(__dirname, '../../logs');
    const logFilePath = path.join(
      logsFolder,
      `${moment().format('DD-MM-YYYY')}-error.log`,
    );
    const logMessage = `${new Date().toISOString()} - ${
      err.stack || err.message
    }\n`;

    fs.appendFile(logFilePath, logMessage, (error) => {
      if (error) {
        console.error('Failed to write error log:', error);
      }
    });
  }

  // Send the error response
  res.status(statusCode).json({ error: errorMessage });
}

module.exports = errorMiddleware;
