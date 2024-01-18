const fs = require("fs");

const readJsonFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data.toString()));
    });
  });
};

const writeJsonFilePromise = (filePath, jsonObj) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) reject(err); // -> to .catch
      else resolve(jsonObj); // -> to .then
    });
  });
};

module.exports = {
  readJsonFilePromise,
  writeJsonFilePromise,
};
