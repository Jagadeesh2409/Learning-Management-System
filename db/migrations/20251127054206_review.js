
exports.up = function (knex) {
    return knex.schema.createTable('review', function (table) {
        table.increments('id').primary();
        table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('cascade');
        table.integer('student_id').unsigned().notNullable().references('id').inTable('users').onDelete('cascade');
        table.text('comment').notNullable();
        table.integer('rating').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('review');
};
