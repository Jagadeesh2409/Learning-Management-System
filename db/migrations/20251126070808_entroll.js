
exports.up = function (knex) {
    return knex.schema.createTable('enrollments', function (table) {
        table.increments('id').primary();
        table.integer('student_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('CASCADE');
        table.enum('status', ['active', 'expired', 'pending']).defaultTo('pending');
        table.timestamp('enrolled_at').defaultTo(knex.fn.now());
        table.timestamp('expired_at').nullable();
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('enrollments');
};
