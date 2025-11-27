
exports.up = function (knex) {
    return knex.schema.createTable('studentquiztest', (table) => {
        table.increments('id').primary()
        table.integer('student_id').unsigned().references('id').inTable('students').onDelete('cascade')
        table.integer('quiz_id').unsigned().references('id').inTable('quiz').onDelete('cascade')
        table.string('mark').defaultTo(false)
        table.string('answer').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('studentquiztest')
};
