
exports.up = function (knex) {
    return knex.schema.createTable('quiz', function (table) {
        table.increments('id').primary();
        table.integer('lesson_id').unsigned().references('id').inTable('lesson').onDelete('cascade');
        table.text('question').notNullable();
        table.string('option1').notNullable();
        table.string('option2').notNullable();
        table.string('option3').notNullable();
        table.string('option4').notNullable();
        table.integer('mark').notNullable();
        table.string('answer').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

};


exports.down = function (knex) {
    return knex.schema.dropTable('quiz');
};


