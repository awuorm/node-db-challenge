
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {projectName: 'complete Node DB',projectDescription: "Finish it by tomorrow"},
        {projectName: 'complete Side project',projectDescription: "Finish it by Monday"},
        {projectName: 'Review React',projectDescription: "Finish it by Sunday"}
      ]);
    });
};
