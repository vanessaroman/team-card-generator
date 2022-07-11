const Employee = require('./employee');

class Engineer extends Employee {

    constructor (id, name, email, gitHub) {
        super('Engineer', name, id, email);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;
