const express = require('express');

const router = express.Router();

const {addUsers,getUsers,getUser,updateUser,deleteUser} =require('../controllers/user');
router.post('/user',addUsers)
router.get('/users',getUsers)
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)



module.exports =router;