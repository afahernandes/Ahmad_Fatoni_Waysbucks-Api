const express = require('express');

const router = express.Router();

const {getTodos, getTodoById, addTodo,updateTodo,deleteTodo}=require('../controllers/todo');

router.get('/todos',getTodos)
router.get('/todos/:id',getTodoById)
router.post('/todo',addTodo)
router.patch('/todo/:id',updateTodo)
router.delete('/todo/:id',deleteTodo)

module.exports =router;