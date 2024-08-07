const listaAnimes = require('../mocks/listaAnimes');
const animesModel = require('../models/animesModel');

async function getAllAnimes(req, res) {
  const animes = await animesModel.getAllAnimesModel();

  return res.send(animes);
}

async function getAnimeById(req, res) {
  const { id } = req.params;
  const anime = await animesModel.getAnimeByIdModel(id);

  return res.send(anime);
}

async function insertAnime(req, res) {
  const { nome, ano, nota, genero, episodios, imagem, sinopse } = req.body;

  await animesModel.insertAnimeModel(
    nome,
    ano,
    nota,
    genero,
    episodios,
    imagem,
    sinopse,
  );

  res.status(201).send('Anime inserido com sucesso');
}

async function updateAnime(req, res) {
  const { id } = req.params;
  const { episodios } = req.body;

  await animesModel.updateAnimeModel(id, episodios);

  res.send('Episódios atualizados com sucesso');
}

async function deleteAnime(req, res) {
  const { id } = req.params;

  await animesModel.deleteAnimeModel(id);

  return res.send('Anime deletado com sucesso');
}

module.exports = {
  getAllAnimes,
  getAnimeById,
  insertAnime,
  updateAnime,
  deleteAnime,
};
