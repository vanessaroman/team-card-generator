const Employee = require('./employee');

class Engineer extends Employee {

    constructor (name, id, email, gitHub) {
        super( 'Engineer', name, id, email);
        this.gitHub = gitHub;
    }

    engGithub(){
       return this.gitHub;
    }

    renderSpecificHTML() {
        const input = `<a href="https://www.github.com/${this.engGithub()}">Github</a>`;
        return this.renderBaseHTML(input);
    }
}



module.exports = Engineer;
