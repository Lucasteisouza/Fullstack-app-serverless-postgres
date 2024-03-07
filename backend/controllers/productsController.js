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

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(Number(id));
  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProduct(id);
  return res.status(204).end();
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, brand, color } = req.body;
  const updatedProduct = await productsServices.updateProduct(id, name, price, brand, color);
  return res.status(200).json(updatedProduct);
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct
};