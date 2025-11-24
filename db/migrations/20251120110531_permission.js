
exports.up = function (knex) {
    return knex.schema.createTable('permission', (table) => {
        table.increments('id').primary()
        table.string('permissions').notNullable()
        table.boolean('showname').notNullable().defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};


exports.down = function (knex) {
    return knex.schema.dropTableIfExists('permission')
};
