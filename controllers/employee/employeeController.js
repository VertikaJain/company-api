const Employees = require("../../models/employee")
const Projects = require("../../models/project")

employeeController = () => {
    return {
        async index(req, res) {
            // return list of employees
            const employees = await Employees.find();
            res.status(200).json({ employees })
        },
        async addEmployee(req, res) {
            // add employee to database
            const { name, email, phone, projectKey } = req.body

            // Validation
            if (!name || !email || !phone || !projectKey) {
                return res.status(400).json({ error: "All fields are required." })
            }
            if (phone.length != 10) {
                return res.status(400).json({ error: "Invalid phone number." })
            }
            // Check if email id exists
            Employees.exists({ email: email }, (error, result) => {
                if (result) {
                    return res.status(400).send({ error: "Email ID already exists." })
                }
            })

            // Check project title on the basic of project key
            const projects = await Projects.find();
            let project = ""; //project Title
            projects.forEach(p => {
                if (p.projectKey === projectKey) {
                    project = p.title
                }
            })

            const employee = new Employees({ name, email, phone, project });
            employee.employeeId = employee._id
            // Saving employee data to MongoDB
            employee.save().then(() => {
                res.status(201).json({ employee })

            }).catch(error => {
                return res.status(400).json({ error })
            })
        }
    }
}

module.exports = employeeController