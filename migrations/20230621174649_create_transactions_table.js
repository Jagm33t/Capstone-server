
exports.up = function (knex) {
  return knex.schema.createTable('transactions', function (table) {
    table.increments('id').primary();
    table.date('date').notNullable();
    table.enum('type', ['send', 'receive']).notNullable();
    table.decimal('amount', 8, 2).notNullable();
    table.string('company').notNullable();
    // Add more columns if needed

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('transactions');
};
