
import express from "express";
import { PostsBusiness } from '../business/PostBusiness';
import { Postcontroller } from '../controller/PostController';
import { PostDatabase } from '../database/PostsDatabase';



export const postsRouter = express.Router()

const postController = new Postcontroller(
    new PostsBusiness(
    new PostDatabase(),
    )
       )
postsRouter.get("/", postController.getPosts)
postsRouter.post("/", postController.createPost)
postsRouter.put("/:id", postController.updatePost)
postsRouter.delete("/:id", postController.deletePost)