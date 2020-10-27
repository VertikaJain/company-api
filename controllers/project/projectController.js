const Projects = require("../../models/project")


projectController = () => {
    return {
        async index(req, res) {
            // return list of projects
            const projects = await Projects.find();
            res.status(200).json(projects)
        },
        addProject(req, res) {
            // add projects to database
            const { title, projectKey } = req.body
            // Validation
            if (!title || !projectKey) {
                return res.status(400).json({ err: "All fields are required." })
            }
            // Check if projectkey exists
            Projects.exists({ projectKey: projectKey }, (err, result) => {
                if (result) {
                    return res.status(400).send({ error: "Project Key already exists." })
                }
            })
            const project = new Projects({ title, projectKey });
            // Saving project data to MongoDB
            project.save().then(() => {
                res.status(201).json({ project })

            }).catch(err => {
                res.status(400).json({ err })
            })
        }
    }
}

module.exports = projectController