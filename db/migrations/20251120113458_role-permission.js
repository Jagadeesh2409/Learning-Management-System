exports.up = function (knex) {
    return knex.schema.createTable('role_permission', (table) => {
        table.increments('id').primary()
        table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('cascade')
        table.integer('permission_id').unsigned().references('id').inTable('permission').onDelete('cascade')
        table.boolean('value').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('role_permission')
};
