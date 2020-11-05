import { Router } from "express";
import UserController from "../controllers/User.Controller";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const userRouter = Router();

userRouter.get("/", ensureAuthenticate, UserController.index);
userRouter.post("/", UserController.create);

export default userRouter;
