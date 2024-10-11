/*   
si je veux implémenter des fonctionnalités supplémentaires spécifiques à la gestion des utilisateurs 
(comme la mise à jour des informations utilisateur, la récupération de l'historique des courses, etc.), 
ce fichier sera le bon endroit pour le faire.



*********************************************************************************
Exemple d'ajout de fonctionnalités dans userController.js :
//1. Mise à jour des informations utilisateur


const User = require('../models/user');

// Mise à jour des informations de l'utilisateur
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;

    await user.save();

    res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//2. Récupération des informations utilisateur


exports.getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Exemple d'ajout des routes dans authRoutes.js :


const { getUser, updateUser } = require('../controllers/userController');

router.get('/user/:userId', getUser); // Récupérer les infos de l'utilisateur
router.put('/user/:userId', updateUser); // Mettre à jour les infos de l'utilisateur

//Conclusion :
//userController.js est conçu pour des fonctions spécifiques liées aux utilisateurs en dehors de l'authentification.
//Je peux utiliser ce fichier pour implémenter des fonctions comme la mise à jour de profil, la récupération des informations utilisateur, etc.



*/