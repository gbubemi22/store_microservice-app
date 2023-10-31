import { Op } from "sequelize";
import DB from '../DB/connect.js';

const ProductRepository = {
  createProduct: async (userId, product_name, description, price) => {
    const product = await DB.products.create({
      userId,
      product_name,
      description,
      price,
    });

    return product;
  },
};


export default ProductRepository;
