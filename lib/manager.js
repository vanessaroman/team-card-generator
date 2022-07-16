const Employee = require('./employee');

class Manager extends Employee {
  constructor( name, id, email, phoneNumber) {
    super('Manager', name, id, email);
    this.phoneNumber = phoneNumber;
  }

  manPhone(){
    return this.phoneNumber;
  }

renderSpecificHTML(){
  const input = `Phone Number: ${this.manPhone()}`
  return this.renderBaseHTML(input);
}
 
}

module.exports = Manager;