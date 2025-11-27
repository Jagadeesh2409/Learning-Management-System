
exports.up = function (knex) {
    return knex.schema.createTable('students', (table) => {
        table.increments('id').primary()
        table.integer('student_id').unsigned().references('id').inTable('users').onDelete('cascade')
        table.string('name').notNullable()
        table.string('age').notNullable()
        table.string('DOB').notNullable()
        table.string('gender').notNullable()
        table.json('education').notNullable()
        table.string('profile_image')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('students')
};
