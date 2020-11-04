import { Router } from "express";
import SessionController from "../controllers/Session.Controller";

const sessionRouter = Router();

sessionRouter.post("/", SessionController.create);

export default sessionRouter;
