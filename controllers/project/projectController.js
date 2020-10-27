const Projects = require("../../models/project")


projectController = () => {
    return {
        async index(req, res) {
            // return list of projects
            const projects = await Projects.find();
            console.log("projects: ", projects);
        }
    }
}

module.exports = projectController