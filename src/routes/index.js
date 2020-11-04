import { Router } from "express";
import usersRouter from "./users.routes";
import sessionRouter from "./session.routes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/session", sessionRouter);

export default routes;
