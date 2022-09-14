// Node modules
const inquirer = require("inquirer");

// Main menu, questions, answers
const mainMenu = [
    {
      prefix: "",
      type: "list",
      name: "main",
      message: "What would you like to do?",
      choices: [
        "View Information",
        "Add Information",
        "Update a record",
        "Remove a record",
        "Exit Application",
      ],
      filter(val) {
        let valParse = val.split(" ");
        if (valParse[0] == "View") {
          return "View";
        }
        if (valParse[0] == "Add") {
          return "Add";
        }
        if (valParse[0] == "Update") {
          return "Update";
        }
        if (valParse[0] == "Remove") {
          return "remove";
        }
        if (valParse[0] == "Exit") {
          return "exit";
        }
      },
    },
    {
      prefix: "",
      type: "list",
      name: "view",
      message: "What would you like to view",
      choices: ["Departments", "Roles", "Employees", "Return to main menu"],
      when(answers) {
        if (answers.main === "View") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      prefix: "",
      type: "list",
      name: "empView",
      message: "How would you like to view employees?",
      choices: [
        "Show all employees",
        "Show all by Manager",
        "Return to main menu",
      ],
      filter(val) {
        let valParse = val.split(" ");
        if (valParse[2] === "employees") {
          return "all";
        }
        if (valParse[3] === "Manager") {
          return "manager";
        } else {
          return "exit";
        }
      },
      when(answers) {
        if (answers.view === "Employees") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
        prefix: "",
        type: "list",
        name: "add",
        message: "What would you like to add?",
        choices: [
          "A new department",
          "A new role",
          "A new employee",
          "Return to main menu",
        ],
        filter(val) {
          let valParse = val.split(" ");
          if (valParse[2] === "department") {
            return "department";
          }
          if (valParse[2] === "role") {
            return "role";
          }
          if (valParse[2] === "employee") {
            return "employee";
          }
          if (valParse[2] === "main") {
            return "main";
          }
        },
        when(answers) {
          if (answers.main === "Add") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        prefix: "",
        type: "list",
        name: "update",
        message: "What would you like to update?",
        choices: [
          "A department name",
          "An employee",
          "A role",
          "Return to main menu",
        ],
        when(answers) {
          if (answers.main === "Update") {
            return true;
          }
        },
        filter(val) {
          let valParse = val.split(" ");
          if (valParse[1] === "department") {
            return "department";
          }
          if (valParse[1] === "employee") {
            return "employee";
          }
          if (valParse[1] === "role") {
            return "role";
          }
          if (valParse[1] === "to") {
            return "main";
          }
        },
      },
    ];
    
    const addDeparment = [
      {
        prefix: "",
        type: "input",
        name: "newDepartment",
        message: "What is the name of the new department?",
      },
    ];
    const addRole = [
      {
        prefix: "",
        type: "",
        name: "id",
        message: `What department ID should be used?`,
      },
      {
        prefix: "",
        type: "input",
        name: "title",
        message: "What is the title for this new role?",
      },
      {
        prefix: "",
        type: "input",
        name: "salary",
        message: "What is the salary for this new role?",
      },
    ];
    const addEmployee = {
      askNames: [
        {
          prefix: "",
          type: "input",
          name: "firstName",
          message: "What is their first name?",
        },
        {
          prefix: "",
          type: "input",
          name: "lastName",
          message: "What is their last name?",
        },
      ],
      askRole: [
        {
          prefix: "",
          type: "input",
          name: "role",
          message: "What role will they be taking (use ID)?",
        },
      ],
      askManager: [
        {
          prefix: "",
          type: "input",
          name: "manager",
          message: "Who is their supervisor (use managers employee ID)?",
        },
      ],
    };

    
    