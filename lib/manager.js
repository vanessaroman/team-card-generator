const Employee = require('./employee');

class Manager extends Employee {
  constructor( name, id, email, phoneNumber) {
    super('Manager', name, id, email);
    this.phoneNumber = phoneNumber;
  }
 
}

module.exports = Manager;