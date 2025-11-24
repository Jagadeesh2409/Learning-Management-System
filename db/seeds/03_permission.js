/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('permission').del()
  await knex('permission').insert([
    { id: 1, permissions: 'student_profile:read', showname: true },
    { id: 2, permissions: 'student_profile:update', showname: true },
    { id: 3, permissions: 'student_profile:delete', showname: true },
    { id: 4, permissions: 'student_profile:create', showname: true },

    { id: 5, permissions: 'instructor_profile:read', showname: true },
    { id: 6, permissions: 'instructor_profile:update', showname: true },
    { id: 7, permissions: 'instructor_profile:delete', showname: true },
    { id: 8, permissions: 'instructor_profile:create', showname: true },

    { id: 9, permissions: 'admin_profile:read', showname: true },
    { id: 10, permissions: 'admin_profile:update', showname: true },
    { id: 11, permissions: 'admin_profile:delete', showname: true },
    { id: 12, permissions: 'admin_profile:create', showname: true },

  ]);
};