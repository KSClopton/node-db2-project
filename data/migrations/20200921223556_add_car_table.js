// function describes the changes we want to make
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      // creates a primary key that autoincrements
      tbl.increments('id');

      // VIN make model mileage - required
      tbl.float('VIN', 128).unique().notNullable();
      tbl.string('Make', 128).notNullable();
      tbl.string('Model', 128).notNullable();
      tbl.float('Mileage', 128).notNullable();

      // // Transmission type title status - not required

      tbl.string('Transmission', 128)
      tbl.string('Title', 128)

  })
};
// describes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
