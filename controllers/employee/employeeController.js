const Employees = require("../../models/employee")

employeeController = () => {
    return {
        async index(req, res) {
            // return list of employees
            const employees = await Employees.find();
            res.status(200).json(employees)
        },
        addEmployee(req, res) {
            // add employee to database
            const { name, email, phone, project } = req.body
            const employee = new Employees({ name, email, phone, project });
            employee.employeeId = employee._id

            // Validation
            if (!name || !email || !phone || !project) {
                return res.status(400).json({ err: "All fields are required." })
            }
            if (phone.length != 10) {
                return res.status(400).send({ error: "Invalid phone number." })
            }
            // Check if email id exists
            Employees.exists({ email: email }, (err, result) => {
                if (result) {
                    return res.status(400).send({ error: "Email ID already exists." })
                }
            })

            // Saving employee data to MongoDB
            employee.save().then(() => {
                res.status(201).json({ employee })

            }).catch(err => {
                res.status(400).json({ err })
            })
        }
    }
}

module.exports = employeeController