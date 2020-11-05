import connection from "../database/database.connection";
import UserView from "../views/User.View";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from ".././config/auth";

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

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect email / password combination!");
    }
    const token = sign({}, authConfig.jwt.secret, {
      subject: String(user.id),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user: UserView.render(user), token };
  },
};
