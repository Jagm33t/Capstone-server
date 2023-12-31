exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("confirm_password").notNullable();
    table.string("username").notNullable();
    table.string("phone_number").notNullable();
    table.string("street_number").notNullable();
    table.string("city").notNullable();
    table.string("province").notNullable();
    table.string("country").notNullable().defaultTo("Unknown");
    table.string("img").notNullable();
    table.string("balance"); // New column: balance
    table.string("last_opened"); // New column: last_opened
    table.string("last_payment"); // New column: last_payment
    table.string("unique_id").unique(); // New column: unique_id
    table.date("last_payment_date"); // New column: last_payment_date
    table.string("last_month_expense"); // New column: last_month_expense
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
