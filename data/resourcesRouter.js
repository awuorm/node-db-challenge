const db = require("./projectsModel");
const express = require("express");

const router = express.Router();

router.get("/",handleResourcesGet);
router.post("/",handleResourcesPost)
function handleResourcesPost(req, res) {
    const resource = {
        resourceName: req.body.resourceName,
        resourceDescription: req.body.resourceDescription
    }
    db.postResources(resource)
      .then(data => {
        res.status(200).json(resource);
        console.table(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  }

function handleResourcesGet(req, res) {
    db.getResources()
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