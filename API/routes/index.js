const { Router } = require('express');
const router = Router();
const Role = require('../helpers/role')

//Controllers
const AuthController = require('../controllers/AuthController');

//Middlewares
const authorize = require('../middlewares/authorize');

//Rutas
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.get('/protected', authorize([Role.User, Role.Admin]), (req, res) => {
    res.send("Ruta protegida");
});

module.exports = router;