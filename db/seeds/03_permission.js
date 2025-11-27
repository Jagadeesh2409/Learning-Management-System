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

    { id: 13, permissions: 'course:read', showname: true },
    { id: 14, permissions: 'course:update', showname: true },
    { id: 15, permissions: 'course:delete', showname: true },
    { id: 16, permissions: 'course:create', showname: true },

    { id: 17, permissions: 'lesson:read', showname: true },
    { id: 18, permissions: 'lesson:update', showname: true },
    { id: 19, permissions: 'lesson:delete', showname: true },
    { id: 20, permissions: 'lesson:create', showname: true },

    { id: 21, permissions: 'quiz:read', showname: true },
    { id: 22, permissions: 'quiz:update', showname: true },
    { id: 23, permissions: 'quiz:delete', showname: true },
    { id: 24, permissions: 'quiz:create', showname: true },

    { id: 25, permissions: 'course:read-entroll', showname: true },

    { id: 26, permissions: 'student-entroll', showname: true },





  ]);
};