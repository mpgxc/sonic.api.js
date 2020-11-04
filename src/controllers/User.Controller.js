import CreateUserService from "../services/CreateUser.Service";
import connection from "../database/connection";
import UserView from "../views/User.View";

export default {
  async index(_request, response) {
    let users = await connection("users").select("*");

    users = UserView.renderMany(users);

    return response.status(200).json(users);
  },

  async create(request, response) {
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
  },
};
