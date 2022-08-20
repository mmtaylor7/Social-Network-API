const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtid")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtid/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
