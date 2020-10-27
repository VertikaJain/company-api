const employeeController = require("../controllers/employee/employeeController")
const projectController = require("../controllers/project/projectController")

initApp = (app) => {

    // GET
    // GET employee list
    app.get('/employee', employeeController().index);
    app.get('/project', projectController().index);

    // POST
    

}

module.exports = initApp
