import CreateSessionService from "../services/CreateSession.Service";

export default {
  async create(request, response) {
    const { email, password } = request.body;

    try {
      const user = await CreateSessionService.execute(email, password);

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  },
};
