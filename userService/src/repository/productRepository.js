import axios from "axios";
import NotFoundError from "../middleware/not-found.js";
import { StatusCodes } from "http-status-codes";

const productpository = {
  getAllProduct: async (req, res) => {
    const products = await axios.get(`${process.env.PODUCT_URL}/products`);
    console.log(process.env.PODUCT_URL);
    if (!products || products.length) {
      throw new NotFoundError(`Products not found`);
    }

    res.status(StatusCodes.OK).json({
      message: `Successfully`,
      data: products.data,
    });
  },

  getOneProduct: async (req, res) => {
    const id  = req.params.id;
    const product = await axios.get(`${process.env.PODUCT_URL}/products/${id}`);

    if (!product) {
      throw new NotFoundError(`Product not found`);
    }
    return res.status(StatusCodes.OK).json({
      message: `Successfully`,
      data: product.data,
    });
  },
};

export default productpository;
