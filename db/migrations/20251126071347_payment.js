
exports.up = function (knex) {
    return knex.schema.createTable('payments', function (table) {
        table.increments('id').primary();
        table.integer('student_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('CASCADE');
        table.string('payment_id').notNullable();
        table.string('payment_status').notNullable();
        table.string('payment_method').notNullable();
        table.string('payment_currency').notNullable();
        table.string('payment_fee').notNullable();
        table.integer('payment_amount').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('payments');
};
