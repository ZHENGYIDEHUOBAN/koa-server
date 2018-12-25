const connection = require('./utils');

const db = {
  query: (model) => {
    let sql = `SELECT * FROM ${model}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, results, fields) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }
}

module.exports = db;
