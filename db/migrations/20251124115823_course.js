exports.up = function (knex) {
    return knex.schema.createTable('course', (table) => {
        table.increments('id').primary();
        table.integer('instructor_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.string('instructor_name').notNullable();
        table.string('title').notNullable();
        table.text('description');
        table.string('image');
        table.enum('course_type', ['online', 'offline', 'recorded', 'hybrid']).notNullable();
        table.integer('duration_in_minutes').notNullable();
        table.enum('price_type', ['free', 'one-time', 'subscription']).notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.decimal('original_price', 10, 2).notNullable();
        table.integer('discount').defaultTo(0);
        table.string('language').notNullable();
        table.integer('valid_month').notNullable();
        table.enum('course_status', ['draft', 'published', 'archived', 'unlisted']).defaultTo('draft');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('course');
};
