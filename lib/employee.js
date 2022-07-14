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
          <h4><b> ${this.name} </b></h4>
          <p> ${this.position} </p>
          <br>
          <p> ${this.id} </p>
          <br>
          <p> ${this.email} </p>
          <br>
          ${input}
        </div>
      </div>

        `;
    }

    renderSpecificHTML() {
        return;
    }

}

// exports class
module.exports = Employee;