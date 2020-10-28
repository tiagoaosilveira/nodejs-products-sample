const express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');

const product = require('../controllers/product');
const auth = require('../util/auth')

router.get('/', product.listAllProducts);
router.get('/:id', product.findProductById);
router.post('/', auth.verifyJWT, product.insertProduct);
router.put('/:id', auth.verifyJWT, product.updateProduct);
router.delete('/:id', auth.verifyJWT, product.deleteProduct);

module.exports = router;