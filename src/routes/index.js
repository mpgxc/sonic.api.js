import { Router } from "express";

import postRouter from "./post.routes";
import usersRouter from "./users.routes";
import sessionRouter from "./session.routes";
import sonicRouter from "./sonic.routes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/post", postRouter);
routes.use("/session", sessionRouter);
routes.use("/sonic", sonicRouter);

export default routes;
