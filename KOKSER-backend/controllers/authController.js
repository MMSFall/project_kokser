const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Driver = require('../models/driver');

const secret = 'mySecret'; // À stocker dans les variables d'environnement

// Inscription utilisateur ou conducteur
exports.register = async (req, res) => {
  const { name, email, password, licenseNumber, registrationNumber, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    if (role === 'driver') {
      const newDriver = await Driver.create({
        name,
        email,
        password: hashedPassword,
        licenseNumber,
        registrationNumber,
      });
      return res.status(201).json({ message: 'Driver registered', newDriver });
    } else {
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      return res.status(201).json({ message: 'User registered', newUser });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Connexion utilisateur ou conducteur
exports.login = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = role === 'driver' ? await Driver.findOne({ where: { email } }) : await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
