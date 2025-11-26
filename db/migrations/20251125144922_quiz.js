
exports.up = function (knex) {
    return knex.schema.createTable('quiz', function (table) {
        table.increments('id').primary();
        table.integer('lesson_id').unsigned().references('id').inTable('lesson').onDelete('cascade');
        table.text('questions');
        table.string('options1');
        table.string('option2');
        table.string('option3');
        table.string('option4');
        table.integer('mark');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

};


exports.down = function (knex) {
    return knex.schema.dropTable('quiz');
};


