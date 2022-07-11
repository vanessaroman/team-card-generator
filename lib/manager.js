const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, name, email, phoneNumber) {
    super(id, name, email, 'Manager');
    this.phoneNumber = phoneNumber;
  }
 
}

module.exports = Manager;