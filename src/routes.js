const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');


routes.get('/product', productController.index);
routes.get('/product/:id', productController.show);
routes.post('/product', productController.store);
routes.put('/product/:id', productController.update);
routes.delete('/product/:id', productController.delete);

module.exports = routes;