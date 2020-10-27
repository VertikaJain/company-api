const Projects = require("../../models/project")


projectController = () => {
    return {
        async index(req, res) {
            // return list of projects
            const projects = await Projects.find();
            res.json(projects)
        },
        addProject(req, res) {
            // add projects to database
            const { title, projectKey } = req.body
            const project = new Projects({ title, projectKey });
            // Saving project data to MongoDB
            project.save().then(() => {
                res.json({ project })

            }).catch(err => {
                res.json({ err })
            })
        }
    }
}

module.exports = projectController