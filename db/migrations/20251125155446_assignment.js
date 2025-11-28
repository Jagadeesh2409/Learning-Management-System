
exports.up = function (knex) {
    return knex.schema.createTable('assignment', function (table) {
        table.increments('id').primary();
        table.integer('lesson_id').unsigned().notNullable().references('id').inTable('lesson').onDelete('cascade');
        table.string('url').notNullable();
        table.integer('size').notNullable();
        table.string('type').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('assignment');
};
