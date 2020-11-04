import { Router } from "express";
import CreateSessionService from "../services/CreateSession.Service";

const sessionRouter = Router();

sessionRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await CreateSessionService.execute(email, password);

    return response.status(200).json(user);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

export default sessionRouter;
