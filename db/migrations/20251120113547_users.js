exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('phone').notNullable()
        table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('cascade')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
