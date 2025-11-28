/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('live_classes', function (table) {
            table.increments('id').primary();
            table.integer('course_id').unsigned().notNullable().references('id').inTable('course').onDelete('cascade');
            table.string('room_name').notNullable().unique();
            table.integer('teacher_id').unsigned().notNullable().references('id').inTable('users').onDelete('cascade');
            table.dateTime('start_time').notNullable();
            table.dateTime('end_time');
            table.enum('status', ['scheduled', 'active', 'completed']).defaultTo('scheduled');
            table.integer('total_students').defaultTo(0);
            table.integer('total_attendance').defaultTo(0);
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('live_attendance', function (table) {
            table.increments('id').primary();
            table.integer('live_class_id').unsigned().references('id').inTable('live_classes').onDelete('CASCADE');
            table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
            table.dateTime('join_time').defaultTo(knex.fn.now());
            table.dateTime('leave_time');
            table.enum('status', ['joined', 'left']).defaultTo('joined');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
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
