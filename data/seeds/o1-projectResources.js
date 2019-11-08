exports.seed = function(knex) {
  // Inserts seed entries
  return knex("projectResources").insert([
    { projectId: 1, resourceId: 1 },
    { projectId: 2, resourceId: 2 },
    { projectId: 3, resourceId: 3 }
  ]);
};
