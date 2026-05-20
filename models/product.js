import fs from "fs";
import path from "path";

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json",
);

const getPRoductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

export class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getPRoductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPRoductsFromFile(cb);
  }
}
