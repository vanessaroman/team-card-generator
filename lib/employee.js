class Employee {
    constructor(position, name, id, email) {
        this.position = position;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // base html that will go into each employee card
    renderBaseHTML(input) {
        return `
        <div class="card">
        <div class="container">
          <h3><b> ${this.name} </b></h3>
          <p> ${this.position} </p>
          <br>
          <p> ${this.id} </p>
          <br>
          <a href="mailto:${this.email}">Email</a>
          <br><br>
         <p> ${input} </p>
        </div>
      </div>

        `;
    }

    renderSpecificHTML() {
        return;
    };

}

// exports class
module.exports = Employee;