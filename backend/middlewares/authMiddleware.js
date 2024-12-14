const { verifyToken } = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Invalid token' });

  req.userId = decoded.id;
  next();
};

module.exports = authMiddleware;
