const Employee = require('./employee');

class Intern extends Employee {

    constructor (id, name, email, school) {
        super('Intern', name, id, email);
        this.school = school;
    }
}

module.exports = Intern;
