import connection from "../database/connection";

export default {
  async execute(userPost) {
    if (!userPost.title || !userPost.content || !userPost.user_id) {
      throw new Error("Empty values for post!");
    }

    const postExists = await connection("posts")
      .where("title", userPost.title)
      .select("*")
      .first();

    if (postExists) {
      throw new Error("A post with the same title is already registered!");
    }

    const trxConnection = await connection.transaction();

    try {
      const postInserted = await trxConnection("posts")
        .insert(userPost)
        .returning("*");

      await trxConnection.commit();

      return postInserted;
    } catch (error) {
      await trxConnection.rollback();

      throw new Error(`Error during post insertion: ${error.message}`);
    }
  },
};
