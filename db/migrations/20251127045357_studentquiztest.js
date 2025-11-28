
exports.up = function (knex) {
    return knex.schema.createTable('studentquiztest', (table) => {
        table.increments('id').primary();
        table.integer('student_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.integer('quiz_id').unsigned().references('id').inTable('quiz').onDelete('cascade');
        table.integer('mark').defaultTo(0);
        table.string('answer').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('studentquiztest');
};
