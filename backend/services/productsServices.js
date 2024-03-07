const { products } = require('../models');

const getAllProducts = async () => {
  try{
  const allProducts = await products.findAll();
  return allProducts;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (name, price, brand, color) => {
  try{
  const newProduct = await products.create({ name, price, brand, color });
  return newProduct;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try{
  await products.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct
};