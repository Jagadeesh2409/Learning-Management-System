
exports.up = function (knex) {
    return knex.schema.createTable('instructors', (table) => {
        table.increments('id').primary()
        table.integer('instructor_id').unsigned().references('id').inTable('users').onDelete('cascade')
        table.json('education').notNullable()
        table.string('resume').notNullable()
        table.integer('age').notNullable()
        table.string('DOB').notNullable()
        table.string('gender').notNullable()
        table.integer('job_type').notNullable()
        table.json('skills').notNullable()
        table.json('experience').notNullable()
        table.string('profile_image')
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('instructors')
};

