import { readFileSync, writeFile } from "fs";
import { lookup } from "mime-types";

class base64 {
  /**
   * @param {string} path 
   * @param {any} callback 
   */
  static encode(path, callback) {
    const look = lookup(path);
    const base64 =
      "data:" + look + ";base64," + readFileSync(path).toString("base64");
    callback(null, base64);
  }

  /**
   * @param {string} value 
   * @param {string} name 
   * @param {any} callback 
   */
  static decode(value, name, callback) {
    const match = value.match(/^data:image\/([\w+]+);base64,([\s\S]+)/);
    writeFile(name, match[2], "base64", function (err) {
      if (!match) throw new Error("Invalid base64 string");
      callback(err, name);
    });
  }
}

export default base64;
