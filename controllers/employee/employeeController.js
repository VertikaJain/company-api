const Employees = require("../../models/employee")

employeeController = () => {
    return {
        async index(req, res) {
            // return list of employees
            const employees = await Employees.find();
            res.json(employees)
        },
        addEmployee(req, res) {
            // add employee to database
            const { name, email, phone, project } = req.body
            const employee = new Employees({ name, email, phone, project });
            employee.employeeId = employee._id
            // Saving employee data to MongoDB
            employee.save().then(() => {
                res.json({ employee })

            }).catch(err => {
                res.json({ err })
            })
        }
    }
}

module.exports = employeeController