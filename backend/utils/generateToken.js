import jwt from "jsonwebtoken";

const generateTokensAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Miliseconds
    httpOnly: true, // Used to prevent access from client side scripting language (prevent XSS attacks)
    sameSite: "strict",
  });
};

export default generateTokensAndSetCookies;
