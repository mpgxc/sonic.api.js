import CreateUserService from "../services/CreateUser.Service";
import connection from "../database/database.connection";
import UserView from "../views/User.View";

export default {
  async index(_request, response) {
    const users = await connection("users").select("*");

    const parserdUsers = UserView.renderMany(users);

    return response.status(200).json(parserdUsers);
  },

  async create(request, response) {
    const { name, avatar, email, password } = request.body;

    try {
      const [user] = await CreateUserService.execute({
        name,
        avatar,
        email,
        password,
      });

      const parserdUser = UserView.render(user);

      return response.status(201).json(parserdUser);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  },
};
