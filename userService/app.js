import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

//pcakeges
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";

//import DB
import connectDB from "../userService/src/DB/connect.js";

//import route
import AuthRouter from "../userService/src/router/authRouter.js";
import ProductRouter from "../userService/src/router/productRouter.js";

app.use(cors());
app.use(morgan("dev"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser(process.env.JWT_COOKIE));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User service" });
});
app.use(bodyParser.json());
app.use(cookieParser(process.env.JWT_COOKIE));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User service" });
});

//use routes
app.use(AuthRouter);
app.use(ProductRouter);

//ErrorHandlerMiddleware
import notFoundMiddleware from "../userService/src/middleware/not-found.js";
import errorHandlerMiddleware from "../userService/src/middleware/error-handler.js";

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//port
const port = process.env.PORT || 9000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listing on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
