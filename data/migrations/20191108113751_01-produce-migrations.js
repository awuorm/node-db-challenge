exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("projectName").notNullable();
      table.string("projectDescription");
      table.boolean("completed").defaultTo("false");
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("taskDescription").notNullable();
      table.string("notes");
      table.boolean("completed").defaultTo("false");
      table
        .integer("projectId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects");
    })
    .createTable("resources", table => {
      table.increments();
      table
        .string("resourceName")
        .unique()
        .notNullable();
      table.string("resourceDescription");
    })
    .createTable("projectResources", table => {
      table.increments();
      table
        .integer("projectId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects");
      table
        .integer("resourceId")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projectResources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
