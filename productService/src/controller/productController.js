import { StatusCodes } from "http-status-codes";
import ProductRepository from "../repository/productRepository.js";

const ProductController = {
  addProduct: async () => {
    const { product_name, description, price } = req.body;
    const userId = req.params;

    const product = await ProductRepository.createProduct(
      userId,
      product_name,
      description,
      price
    );

    res.status(StatusCodes.CREATED).json({
      message: `successfull`,
      product,
    });
  },
};


export default ProductController;
