const service = require('./upload.service');
const asyncHandler = require('express-async-handler');
const { BadRequestError } = require('../exceptions/errors');
const uploadFile = require('../middlewares/upload/cloudinary');
const response = require('../utils/responses');

const UploadImage = asyncHandler(async (req, res) => {
  const { file } = req;
  if (!file) return new BadRequestError('No image uploaded');

  const upload = await uploadFile(
    file.path,
    'your folder path you have created on cloudinary.',
  );
  const { secure_url: image_url } = upload;
  const result = await service.UploadImage({ image_url });

  return response(res, 201, result);
});

module.exports = { UploadImage };
