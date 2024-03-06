const productsModel = require('../models/products');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};



module.exports = {
  getAllProducts,
};