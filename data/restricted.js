const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET || "secret, stop while you are ahead";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      console.log("token: ", token);
      console.log("jwtKey: ", jwtKey);
      console.log("error: ", err);
      console.log("decoded: ", decoded);
      if (err) return res.status(401).json({ message: "Invalid Credentials" });

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(400).json({ message: "No token provided" });
  }
};
