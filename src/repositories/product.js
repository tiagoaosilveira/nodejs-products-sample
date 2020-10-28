const { query } = require('express');
const { Product } = require('../models');
const queryUtil = require('../util/query');

exports.findAll = async () => {
    const products = await Product.findAll();
    return products;
};

exports.findById = async (id) => {
    const product = await Product.findByPk(id);
    return product;
};

exports.insert = async (product) => {
    const createdProduct = await Product.create(product);
    return createdProduct;
};

exports.update = async (id, product) => {
    const updatedProduct = await Product.update(
        product,
        {
            returning: true, 
            where: {
                id: id
            } 
        }
    )
    return queryUtil.extractValues(updatedProduct);
};

exports.delete = async (id) => {
    const deletedProduct = await Product.destroy(
        {
            where: {
                id: id
            }
        }
    )
    return deletedProduct;
};