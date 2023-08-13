const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const waifusController = require('../controllers/waifusController')

router.get('/users', userController.getAllUsers);
router.get('/users/:id',userController.getOneUserById);
router.post('/users',userController.createUser);
router.delete('/users/:id',userController.deleteUser);
router.put('/users/:id', userController.modifyUser);
router.get('/waifus',waifusController.getAllWaifus);
router.post('/waifus',waifusController.createWaifus);
module.exports = router;