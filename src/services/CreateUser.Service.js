import connection from "../database/connection";
import { hash } from "bcryptjs";

export default {
  async execute(userData) {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.avatar
    ) {
      throw new Error("Empty values for user!");
    }

    const trxConnection = await connection.transaction();

    try {
      const hashPassword = await hash(userData.password, 8);

      const userInserted = await trxConnection("users")
        .insert({
          ...userData,
          password: hashPassword,
        })
        .returning("*");

      await trxConnection.commit();

      return userInserted;
    } catch (error) {
      await trxConnection.rollback();

      throw new Error(`Error during user insertion: ${error.message}`);
    }
  },
};
