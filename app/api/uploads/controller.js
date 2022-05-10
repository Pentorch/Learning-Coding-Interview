const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(403).json({
        message: "NO file uploaded",
      });
    }

    res.status(201).json({
      message: "Success upload image",
      data: { src: `/uploads/${req.file.filename}` },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { uploadImage };
