
exports.up = function (knex) {
    return knex.schema.createTable('social_media_link', (table) => {
        table.increments('id').primary()
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
        table.string('instagram').nullable()
        table.string('facebook').nullable()
        table.string('linkedin').nullable()
        table.string('github').nullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('social_media_link')
};

