const db = require('../db/index');

class model {
  constructor(modelName) {
    this.modelName = modelName;
  }
  query() {
    return db.query(this.modelName);
  }
}

module.exports = model;
