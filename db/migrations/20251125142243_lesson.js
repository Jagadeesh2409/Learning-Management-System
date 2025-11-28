
exports.up = function (knex) {
    return knex.schema.createTable('lesson', (table) => {
        table.increments('id').primary();
        table.integer('course_id').unsigned().references('id').inTable('course').onDelete('cascade');
        table.integer('instructor_id').unsigned().references('id').inTable('users').onDelete('cascade');
        table.string('video').notNullable();
        table.string('thumbnail').notNullable();
        table.string('duration').notNullable();
        table.string('title').notNullable();
        table.text('description');
        table.string('slug').notNullable().unique();
        table.enum('type', ['video', 'audio', 'document', 'image']).notNullable();
        table.enum('status', ['active', 'inactive']).defaultTo('active');
        table.string('difficulty').notNullable();
        table.integer('order').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

};


exports.down = function (knex) {
    return knex.schema.dropTable('lesson');
};
