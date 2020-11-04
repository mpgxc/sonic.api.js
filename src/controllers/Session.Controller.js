import CreateSessionService from "../services/CreateSession.Service";

export default {
  async create(request, response) {
    const { email, password } = request.body;

    try {
      const { user, token } = await CreateSessionService.execute(
        email,
        password
      );

      return response.status(201).json({ user, token });
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  },
};
