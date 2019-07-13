
exports.up = function(knex) {
  return knex.schema
    .createTable('chefs', function(tbl) {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('email').notNullable();
      tbl.string('location').notNullable();
    })
    .createTable('recipes', function(tbl) {
      tbl.increments();
      tbl.string('recipe_name');
      tbl.string('ingredients');
      tbl.string('pic');
      tbl
      .integer('chef_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('chefs')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    })

    .createTable('mealtype', function(tbl) {
      tbl.increments();
      tbl
        .boolean('breakfast')
        .notNullable()
        .defaultTo(false);
      tbl
        .boolean('lunch')
        .notNullable()
        .defaultTo(false);
      tbl
        .boolean('dinner')
        .notNullable()
        .defaultTo(false);
      tbl
        .boolean('dessert')
        .notNullable()
        .defaultTo(false);
      tbl
        .boolean('snack')
        .notNullable()
        .defaultTo(false);
      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('chefs')
    .dropTable('recipes')
    .dropTable('mealtype');
};
