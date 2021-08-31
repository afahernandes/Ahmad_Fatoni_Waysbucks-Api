const express = require('express');

const router = express.Router();

const {addUsers,getUsers,getUser,updateUser,deleteUser} =require('../controllers/user');
router.post('/user',addUsers)
router.get('/users',getUsers)
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

const {addPrduct,getProducts,getProduct,updateProduct,deleteProduct} =require('../controllers/product');
router.post('/product',addPrduct)
router.get('/products',getProducts)
router.get('/product/:id',getProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',deleteProduct)

const {addTopping,getToppings,getTopping,updateTopping,deleteTopping} =require('../controllers/topping');
router.post('/topping',addTopping)
router.get('/toppings',getToppings)
router.get('/topping/:id',getTopping)
router.put('/topping/:id',updateTopping)
router.delete('/topping/:id',deleteTopping)



module.exports =router;