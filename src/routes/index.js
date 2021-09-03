const express = require('express');

const router = express.Router();

const { auth,authAdmin } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile');

const {login ,register}=require('../controllers/auth');
const {getUsers,getUser,updateUser,deleteUser} =require('../controllers/user');
const {addPrduct,getProducts,getProduct,updateProduct,deleteProduct} =require('../controllers/product');
const {addTopping,getToppings,getTopping,updateTopping,deleteTopping} =require('../controllers/topping');
const {addTransaction,getTransactions,getTransaction,getUserTransaction,updateTransaction,deleteTransaction} =require('../controllers/transaction');

router.post('/login',login);
router.post('/register',register);

router.get('/users',getUsers)
router.get('/user/:id',getUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)

router.post('/product', authAdmin,uploadFile('image'),addPrduct)
router.get('/products',getProducts)
router.get('/product/:id',getProduct)
router.put('/product/:id',authAdmin,updateProduct)
router.delete('/product/:id',authAdmin,deleteProduct)

router.post('/topping',authAdmin,uploadFile('image'),addTopping)
router.get('/toppings',getToppings)
router.get('/topping/:id',getTopping)
router.put('/topping/:id',authAdmin,updateTopping)
router.delete('/topping/:id',authAdmin,deleteTopping)

router.post('/transaction',auth,addTransaction)
router.get('/transactions',getTransactions)
router.get('/transaction/:id',getTransaction)
router.get('/cart/',auth,getUserTransaction)
router.put('/transaction/:id',auth,uploadFile('attachment'),updateTransaction)
router.delete('/transaction/:id',auth,deleteTransaction)

module.exports =router;