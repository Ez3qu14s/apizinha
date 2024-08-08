const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime-controller');
const middlewareAnimes = require('../middlewares/anime-middlewares');
const {
  validateTokenMiddleware,
} = require('../middlewares/validate-middleware');

router.get('/animes', animeController.getAllAnimes);
router.get(
  '/animes/:id',
  middlewareAnimes.middlewareGetAnimeById,
  animeController.getAnimeById,
);
router.post(
  '/animes',
  validateTokenMiddleware,
  middlewareAnimes.middlewareInsertAnime,
  animeController.insertAnime,
);
router.put(
  '/animes/:id',
  validateTokenMiddleware,
  middlewareAnimes.middlewareUpdateAnime,
  animeController.updateAnime,
);
router.delete(
  '/animes/:id',
  validateTokenMiddleware,
  middlewareAnimes.middlewareDeleteAnime,
  animeController.deleteAnime,
);

module.exports = router;
