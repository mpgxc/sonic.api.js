import { Router } from "express";
import PostController from "../controllers/Post.Controller";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const postRouter = Router();

postRouter.use(ensureAuthenticate);

postRouter.get("/", ensureAuthenticate, PostController.index);
postRouter.post("/", PostController.create);

export default postRouter;
