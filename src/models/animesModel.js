const connection = require('./connection');

async function getAllAnimesModel() {
  const animes = await connection.query('SELECT * FROM animes');

  return animes.rows;
}

async function getAnimeByIdModel(id) {
  const anime = await connection.query(`SELECT * FROM animes WHERE id = ${id}`);

  return anime.rows[0];
}

async function insertAnimeModel(
  nome,
  ano,
  nota,
  genero,
  episodios,
  imagem,
  sinopse,
) {
  await connection.query(`
        INSERT INTO animes ( nome, ano, nota, categoria_id, episodios, imagem, sinopse) VALUES (
            '${nome}',
            ${ano},
            ${nota},
            '${genero}',
            ${episodios},
            '${imagem}',
            '${sinopse}' 
        )
     `);

  return;
}

async function getAnimeByNameModel(nome) {
  const anime = await connection.query(
    `SELECT * FROM animes WHERE nome LIKE '${nome}'`,
  );

  return anime.rows[0];
}

async function updateAnimeModel(id, episodios) {
  await connection.query(
    `UPDATE animes SET episodios = ${episodios} WHERE id = ${id}`,
  );
  return;
}

async function deleteAnimeModel(id) {
  await connection.query(`DELETE FROM animes WHERE id = ${id}`);
  return;
}

module.exports = {
  getAllAnimesModel,
  getAnimeByIdModel,
  insertAnimeModel,
  getAnimeByNameModel,
  updateAnimeModel,
  deleteAnimeModel,
};
