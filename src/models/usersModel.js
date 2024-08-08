const connection = require('./connection');

async function insertUserModel(nome, email, senha) {
  await connection.query(`
    INSERT INTO users (nome, email, senha) VALUES (
      '${nome}',
      '${email}',
      '${senha}'
      )
  `);

  return;
}

async function getUserByIDModel(id) {
  const user = await connection.query(`
    SELECT id, nome, email FROM users WHERE id = ${id}
  `);

  return user.rows[0];
}

async function deleteUserByIDModel(id) {
  await connection.query(`
    DELETE FROM users WHERE id = ${id}
  `);
  return;
}

// const hasPropertyColumn = await connection.query(
//   `SELECT column_name
//   FROM information_schema.columns
//   WHERE table_name = $1 AND column_name = $2`,
//   ['users', property],
// );

async function updateUserModel(id, property, newValue) {
  await connection.query(
    `
        UPDATE users
        SET ${property} = '${newValue}'
        WHERE id = ${id}
    `,
  );

  const user = await getUserByIDModel(id);
  return user;
}

module.exports = {
  insertUserModel,
  getUserByIDModel,
  deleteUserByIDModel,
  updateUserModel,
};
