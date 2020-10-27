const employeeController = require("../controllers/employee/employeeController")
const projectController = require("../controllers/project/projectController")

initApp = (app) => {

    // GET
    // GET employee list
    app.get('/employee', employeeController().index);
    // GET project list
    app.get('/project', projectController().index);

    // POST
    // Adding Employee
    app.post("/employee", employeeController().addEmployee)
    // Adding Project
    app.post("/project", projectController().addProject)

}

module.exports = initApp
