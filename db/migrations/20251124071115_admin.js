
exports.up = function (knex) {
    return knex.schema.createTable('admins', (table) => {
        table.increments('id').primary()
        table.integer('admin_id').unsigned().references('id').inTable('users').onDelete('cascade')
        table.string('profile_image').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
};


exports.down = function (knex) {
    return knex.schema.dropTable('admins')
};

