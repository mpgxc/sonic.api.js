import { Router } from "express";
import UserController from "../controllers/User.Controller";

const userRouter = Router();

userRouter.get("/", UserController.index);
userRouter.post("/", UserController.create);

export default userRouter;
