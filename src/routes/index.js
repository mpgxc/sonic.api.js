import { Router } from "express";
import postRouter from "./post.routes";
import usersRouter from "./users.routes";
import sessionRouter from "./session.routes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/post", postRouter);
routes.use("/session", sessionRouter);

export default routes;
