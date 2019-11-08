const knex = require("knex");
const config = require("../knexfile");
knex(config.development);