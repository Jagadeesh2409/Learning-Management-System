/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('roles').del()
    await knex('roles').insert([
        { id: 1, name: 'users', description: "it is student profile" },
        { id: 2, name: 'instructor', description: "it is insructor profile" },
        { id: 3, name: 'admin', description: "it is admin profile" }
    ]);
};
