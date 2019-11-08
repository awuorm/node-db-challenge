
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {resourceName: 'conference room 2'},
        {resourceName: 'You dont know Javascript'},
        {resourceName: 'Github'}
      ]);
    });
};
