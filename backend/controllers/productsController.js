const productsServices = require('../services/productsServices');

const getAllProducts = async (req, res) => {
  const products = await productsServices.getAllProducts();
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};