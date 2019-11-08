const db = require("./db-config");
module.exports = {
  getProjects,
  postProjects,
  getResources,
  postResources,
  // postTasks,
   getTasks,
};

function getTasks(id) {
    return db("tasks as t").where({projectId:id});
}

function getResources() {
    return db("resources as r");
}

function postResources(resource) {
    return db("resources as r")
      .insert(resource)
  }
  

function getProjects() {
  return db("projects as p");
}

function postProjects(projects) {
  return db("projects as p")
    .insert(projects)
}
