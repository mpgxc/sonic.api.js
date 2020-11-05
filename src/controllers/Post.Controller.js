import CreatePostService from "../services/CreatePost.Service";
import connection from "../database/database.connection";

export default {
  async index(request, response) {
    const userId = request.userId;

    const posts = await connection("users")
      .join("posts", "posts.user_id", "=", "users.id")
      .select("*")
      .where("user_id", String(userId));

    return response.status(200).json(posts);
  },

  async create(request, response) {
    const userId = request.userId;

    const { title, content } = request.body;

    try {
      const post = await CreatePostService.execute({
        title,
        content,
        user_id: userId,
      });

      return response.status(201).json(post);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  },
};
