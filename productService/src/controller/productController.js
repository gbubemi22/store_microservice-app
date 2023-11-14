import { StatusCodes } from "http-status-codes";
import ProductRepository from "../repository/productRepository.js";

const ProductController = {
  addProduct: async (req, res) => {
    const { userId, product_name, description, price } = req.body;

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

  getAllProducts: async (req, res) => {
    const products = await ProductRepository.getAllProducts();

    if (!products) {
      throw new NotFoundError(`Product not found`);
    }

    return res.status(StatusCodes.OK).json({
      message: `successfull`,
      count: products.length,
      data: products,
    });
  },

  getOneProduct: async (req, res) => {
    const id = req.params.id;

    const product = await ProductRepository.getOneProduct(id);

    if (!product) {
      throw new NotFoundError(`Product not found`);
    }

    return res.status(StatusCodes.OK).json({
      message: `successfull`,
      data: product,
    });
  },
};

export default ProductController;
