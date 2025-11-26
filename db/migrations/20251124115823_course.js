exports.up = function (knex) {
    return knex.schema.createTable('course', (table) => {
        table.increments('id').primary();
        table.integer('instructor_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.string('title').notNullable();
        table.text('description');
        table.date('start_date');
        table.date('ending_date');
        table.enum('course_type', ['online', 'offline', 'recorded', 'hybrid']).notNullable();
        table.integer('duration_in_minutes').notNullable();
        table.enum('price_type', ['free', 'one-time', 'subscription']).notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.decimal('original_price', 10, 2).notNullable();
        table.integer('discount').defaultTo(0);
        table.enum('course_status', ['draft', 'published', 'archived', 'unlisted']).defaultTo('draft');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('course');
};
