import { Router } from "express";
import CreateUserService from "../services/CreateUser.Service";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Deu certo!" });
});

userRouter.post("/", async (request, response) => {
  const { name, avatar, email, password } = request.body;

  try {
    const user = await CreateUserService.execute({
      name,
      avatar,
      email,
      password,
    });

    return response.status(201).json(user);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
});

export default userRouter;
