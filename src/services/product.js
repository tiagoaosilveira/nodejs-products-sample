const productRepository = require('../repositories/product')

exports.findAllProducts = async () => {
    const products = await productRepository.findAll();
    return products;
};

exports.findProductById = async (id) => {
    const product = await productRepository.findById(id);
    return product;
};

exports.insertProduct = async (product) => {
    const createdProduct = await productRepository.insert(product);
    return createdProduct;
};

exports.updateProduct = async (id, product) => {
    const updatedProduct = await productRepository.update(id, product);
    return updatedProduct;
};

exports.deleteProduct = async (id) => {
    const deletedProduct = await productRepository.delete(id);
    return deletedProduct;
};