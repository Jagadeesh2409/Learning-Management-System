/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');

exports.seed = async function (knex) {

  await knex('users').del();

  const hash = await bcrypt.hash("jaga@1234", 10);

  return knex('users').insert([
    {
      name: "Demo Student",
      email: "student@gmail.com",
      phone: "9655975647",
      password: hash,
      role_id: 1
    },
    {
      name: "Demo Instructor",
      email: "instructor@gmail.com",
      phone: "9655975647",
      password: hash,
      role_id: 2
    },
    {
      name: "Demo Admin",
      email: "admin@gmail.com",
      phone: "9655975647",
      password: hash,
      role_id: 3
    }
  ]);
};
