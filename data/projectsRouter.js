const db = require("./projectsModel");
const express = require("express");

const router = express.Router();

router.get("/:id/tasks",handleTasksGet);
router.get("/:id",handleProjectsGetById);
router.get("/", handleProjectsGet);
router.post("/",handleProjectPost);

function handleTasksGet(req,res) {
    db.getTasks(req.params.id)
    .then(data => {
        res.status(200).json(data);
        console.table(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
}



function handleProjectPost(req, res) {
    const project = {
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription,
        completed: req.body.completed
    }
    db.postProjects(project)
      .then(data => {
        res.status(201).json(project);
        console.table(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  }

function handleProjectsGetById(req, res) {
    db.getProjects(req.params.id)
      .then(data => {
        res.status(200).json(data);
        console.table(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  }

function handleProjectsGet(req, res) {
  db.getProjects()
    .then(data => {
      res.status(200).json(data);
      console.table(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
}

module.exports = router;
