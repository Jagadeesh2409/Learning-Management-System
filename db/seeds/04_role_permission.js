/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('role_permission').del()
  await knex('role_permission').insert([
    { role_id: 1, permission_id: 1, value: true },
    { role_id: 1, permission_id: 2, value: true },
    { role_id: 1, permission_id: 3, value: true },
    { role_id: 1, permission_id: 4, value: true },

    { role_id: 2, permission_id: 5, value: true },
    { role_id: 2, permission_id: 6, value: true },
    { role_id: 2, permission_id: 7, value: true },
    { role_id: 2, permission_id: 8, value: true },

    { role_id: 2, permission_id: 13, value: true },
    { role_id: 2, permission_id: 14, value: true },
    { role_id: 2, permission_id: 15, value: true },
    { role_id: 2, permission_id: 16, value: true },

    { role_id: 2, permission_id: 17, value: true },
    { role_id: 2, permission_id: 18, value: true },
    { role_id: 2, permission_id: 19, value: true },
    { role_id: 2, permission_id: 20, value: true },

    { role_id: 3, permission_id: 9, value: true },
    { role_id: 3, permission_id: 10, value: true },
    { role_id: 3, permission_id: 11, value: true },
    { role_id: 3, permission_id: 12, value: true },

    { role_id: 3, permission_id: 21, value: true },
    { role_id: 3, permission_id: 22, value: true },
    { role_id: 3, permission_id: 23, value: true },
    { role_id: 3, permission_id: 24, value: true },

    { role_id: 4, permission_id: 21, value: true },
    { role_id: 4, permission_id: 22, value: true },
    { role_id: 4, permission_id: 23, value: true },
    { role_id: 4, permission_id: 24, value: true },

    { role_id: 5, permission_id: 21, value: true },
    { role_id: 5, permission_id: 22, value: true },
    { role_id: 5, permission_id: 23, value: true },
    { role_id: 5, permission_id: 24, value: true },
  ]);
};

