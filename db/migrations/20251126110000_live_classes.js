/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('live_classes', function (table) {
            table.increments('id').primary();
            table.integer('course_id').unsigned().notNullable(); // Assuming course_id is integer
            table.string('room_name').notNullable().unique();
            table.integer('teacher_id').unsigned().notNullable(); // Assuming teacher_id is integer
            table.dateTime('start_time').notNullable();
            table.dateTime('end_time');
            table.enum('status', ['scheduled', 'active', 'completed']).defaultTo('scheduled');
            table.timestamps(true, true);
        })
        .createTable('live_attendance', function (table) {
            table.increments('id').primary();
            table.integer('live_class_id').unsigned().references('id').inTable('live_classes').onDelete('CASCADE');
            table.integer('user_id').unsigned().notNullable(); // Student ID
            table.string('room_name').notNullable();
            table.dateTime('join_time').defaultTo(knex.fn.now());
            table.dateTime('leave_time');
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('live_attendance')
        .dropTableIfExists('live_classes');
};
