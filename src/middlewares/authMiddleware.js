const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ error: 'Token inválido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};

