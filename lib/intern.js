const Employee = require('./employee');

class Intern extends Employee {

    constructor ( name, id, email, school) {
        super('Intern', name, id, email);
        this.school = school;
    }

    intSchool(){
        return this.school;
    }

    renderSpecificHTML() {
        const input = `School: ${this.intSchool()}`

        return this.renderBaseHTML(input);
    }

}


module.exports = Intern;
