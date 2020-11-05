import { Router } from "express";

import SonicController from "../controllers/Sonic.Controller";
import SonicSuggestController from "../controllers/SonicSuggest.Controller";
import ensureAuthenticate from "../middlewares/ensureAuthenticate";

const sonicRouter = Router();

sonicRouter.use(ensureAuthenticate);

sonicRouter.get("/search", SonicController.index);
sonicRouter.get("/suggest", SonicSuggestController.index);

export default sonicRouter;
