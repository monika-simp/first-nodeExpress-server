const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.getAllUsers);
router.get('/users/:id',userController.getOneUserById);
router.post('/users',userController.createUser);
router.delete('/users/:id',userController.deleteUser);
router.put('/users/:id', userController.modifyUser);

module.exports = router;