import connection from "../database/connection";

export default {
  async execute(email, password) {
    if (!email || !password) {
      throw new Error("Empty values for email / password!");
    }

    const user = await connection("users")
      .where("email", email)
      .select("*")
      .first();

    if (!user) {
      throw new Error("Incorrect email / password combination!");
    }

    return user;
  },
};
