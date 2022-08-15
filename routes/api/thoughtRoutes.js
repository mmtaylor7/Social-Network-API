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

router.route("/reactions").post(createReaction);

router.route("/:thoughtid/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
