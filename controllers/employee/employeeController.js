const Employees = require("../../models/employee")

employeeController = () => {
    return {
        async index(req, res) {
            // return list of employees
            const employees = await Employees.find();
            console.log("employees: ",employees);
        }
    }
}

module.exports = employeeController