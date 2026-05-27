const fs = require("fs");

const deleteFile = (filePath) => {
  if (!filePath) return;
  if (!fs.existsSync(filePath)) return;
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};

exports.deleteFile = deleteFile;
