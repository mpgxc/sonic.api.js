import connection from "../database/connection";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import UserView from "../views/User.View";

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

    const token = sign({}, "jhkasjhdsakdjashdkjashdkjsadhasd", {
      subject: String(user.id),
      expiresIn: "1d",
    });

    return { user: UserView.render(user), token };
  },
};
