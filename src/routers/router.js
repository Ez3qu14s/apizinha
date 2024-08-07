const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime-controller');
const middlewareAnimes = require('../middlewares/anime-middlewares');

router.get('/animes', animeController.getAllAnimes);
router.get(
  '/animes/:id',
  middlewareAnimes.middlewareGetAnimeById,
  animeController.getAnimeById,
);
router.post(
  '/animes',
  middlewareAnimes.middlewareInsertAnime,
  animeController.insertAnime,
);
router.put(
  '/animes/:id',
  middlewareAnimes.middlewareUpdateAnime,
  animeController.updateAnime,
);
router.delete(
  '/animes/:id',
  middlewareAnimes.middlewareDeleteAnime,
  animeController.deleteAnime,
);

module.exports = router;
