const Model = require('./interface');

class User extends Model {
  constructor(id, code, name, age, regDate) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.age = age;
    this.regDate = regDate;
  }
}

module.exports = User;
