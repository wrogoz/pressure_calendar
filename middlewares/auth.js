const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("access-token");
    if (!token) {
      res.send({ error: "no token provided" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = decodedToken;
    next();
  } catch (error) {
    res.status(500).send({ server_error: error });
  }
};

module.exports = auth;
