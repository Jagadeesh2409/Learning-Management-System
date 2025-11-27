
exports.up = function (knex) {
    return knex.schema.createTable('review', function (table) {
        table.increments('id').primary();
        table.integer('course_id').notNullable();
        table.integer('student_id').notNullable();
        table.string('comment').notNullable();
        table.integer('rating').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('review');
};
