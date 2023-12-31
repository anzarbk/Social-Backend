import express from "express";
import { verifyToken } from "../middleware/auth";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts";

const router = express.Router();

//#######  GET  #############

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//#######  PATCH  #############

router.patch("/:id/like", verifyToken, likePost);

export default router;
