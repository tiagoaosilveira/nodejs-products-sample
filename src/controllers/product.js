const productService = require('../services/product')

exports.listAllProducts = async (req, res) => {
    try {
        const data = await productService.findAllProducts();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to get Products'});
    }
};

exports.findProductById = async (req, res) => {
    try {
        const data = await productService.findProductById(req.params.id);
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(200).send({message: 'Product not found'})
        }
    } catch (e) {
        res.status(500).send({message: 'Failed to get Product By Id'});
    }
};

exports.insertProduct = async (req, res) => {
    if(!req.body.name || !req.body.quantity || !req.body.price) {
        res.status(422).send({message: 'Missing product fields'});
    }
    try {
        const data = await productService.insertProduct(req.body);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to insert product'});
    }
}

exports.updateProduct = async (req, res) => {
    if(!req.body.name || !req.body.quantity || !req.body.price) {
        res.status(422).send({message: 'Missing product fields'});
    }
    try {
        const data = await productService.updateProduct(req.params.id, req.body);
        if (data.rowsUpdated) {
            res.status(200).send(data.updatedBook);
        } else {
            res.status(404).send({message: 'Product not found, nothing to update'});
        }
        
    } catch (e) {
        res.status(500).send({message: 'Failed to update product'});
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const data = await productService.deleteProduct(req.params.id);
        if (data) {
            res.status(200).send({
                message: 'Product succesfully removed!'
            });
        } else {
            res.status(404).send({message: 'Product not found, nothing to remove'});
        }
    } catch (e) {
        res.status(500).send({message: 'Failed to remove product'});
    }
}