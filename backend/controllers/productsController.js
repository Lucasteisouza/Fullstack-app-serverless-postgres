const productsServices = require('../services/productsServices');

const getAllProducts = async (req, res) => {
  const products = await productsServices.getAllProducts();
  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name, price, brand, color } = req.body;
  const newProduct = await productsServices.createProduct(name, price, brand, color);
  return res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct
};