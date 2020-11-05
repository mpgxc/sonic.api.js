import { verify } from "jsonwebtoken";
import authConfig from ".././config/auth";

const ensureAuthenticate = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Missing JWT Token!");
  }

  const [, token] = authHeader.split(" ");

  try {
    const verifyTokenIsValid = verify(token, authConfig.jwt.secret);

    console.log(verifyTokenIsValid);

    return next();
  } catch (error) {
    throw new Error("Invalid JWT Token!");
  }
};

export default ensureAuthenticate;
