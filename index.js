const fs = require("fs");
const mineType = require("mime-types");
class base64 {
  static encode(path, callback) {
    const look = mineType.lookup(path);
    const base64 =
      "data:" + look + ";base64," + fs.readFileSync(path).toString("base64");
    callback(null, base64);
  }
  static decode(value, name, callback) {
    const match = value.match(/^data:image\/([\w+]+);base64,([\s\S]+)/);
    fs.writeFile(name, match[2], "base64", function (err) {
      if (!match) throw new Error("Invalid base64 string");
      callback(err, name);
    });
  }
}

module.exports = base64;
