const db = require("./db-config");
module.exports = {
  getProjects,
  postProjects,
  getResources,
  postResources,
  postTasks,
  getTasks
};

function postTasks(task) {
  return db("tasks as t").insert(task);
}

function getTasks(id) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.projectId")
    .select("t.projectId","p.projectName","p.projectDescription","t.taskDescription","t.notes","t.completed")
    .where({ projectId: id });
}

function getResources() {
  return db("resources as r");
}

function postResources(resource) {
  return db("resources as r").insert(resource);
}

function getProjects() {
  return db("projects as p");
}

function postProjects(projects) {
  return db("projects as p").insert(projects);
}
