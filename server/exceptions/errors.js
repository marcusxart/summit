/**
 * Custom error class.
 * @class CustomError
 * @extends Error
 */
class CustomError extends Error {
  /**
   * Creates an instance of CustomError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Bad request error class.
 * @class BadRequestError
 * @extends CustomError
 */
class BadRequestError extends CustomError {
  /**
   * Creates an instance of BadRequestError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

/**
 * Unauthorized error class.
 * @class UnauthorizedError
 * @extends CustomError
 */
class UnauthorizedError extends CustomError {
  /**
   * Creates an instance of UnauthorizedError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

/**
 * Forbidden error class.
 * @class ForbiddenError
 * @extends CustomError
 */
class ForbiddenError extends CustomError {
  /**
   * Creates an instance of ForbiddenError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

/**
 * Not found error class.
 * @class NotFoundError
 * @extends CustomError
 */
class NotFoundError extends CustomError {
  /**
   * Creates an instance of NotFoundError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

/**
 * Validation error class.
 * @class ValidationError
 * @extends CustomError
 */
class ValidationError extends CustomError {
  /**
   * Creates an instance of ValidationError.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message);
    this.statusCode = 422;
  }
}

module.exports = {
  CustomError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
};
