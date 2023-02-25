import jwt from "jsonwebtoken";

export const verifyAuth = async (token) => {
  try {
    const verifiedUser = await jwt.verify(token, process.env.NEXTAUTH_SECRET);
    console.log("verifiedUser : ", verifiedUser);
    return verifiedUser;
  } catch (error) {
    throw new Error("Your token has expired.");
  }
};
