const router = require("express").Router()
const postController = require("../controllers/post")

router.get("/", postController.getPosts)
router.post("/user", postController.getUserPosts)
router.post("/create", postController.createPost)
router.put("/edit/:id", postController.updatePost)
router.delete("/delete/:id", postController.deletePost)

module.exports = router