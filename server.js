const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes

const authRouter = require("./routets/auth/auth-routes");
const adminProductsRouter = require("./routets/admin/products-routes");
const adminOrderRouter = require("./routets/admin/orders-routes");
const shopProductsRouter = require("./routets/shop/products-routes");
const shopCartRouter = require("./routets/shop/cart-routes");
const shopAddressRouter = require("./routets/shop/address-routes");
const shopOrderRouter = require("./routets/shop/orders-routes");
const shopSearchRouter = require("./routets/shop/search-routes");
const shopReviewRouter = require("./routets/shop/review-routes");
const commonFeatureRouter = require("./routets/common/features-routes");
const connectDB = require("./Config/db_config");

// connect database

const app = express();
connectDB();
const PORT = 4000;

app.use(
  cors({
    origin: [
      "https://localhost:5173",
      "https://ecommerce-vizo.vercel.app",
      "https://e-commerce-backend-9rj8.onrender.com",
    ],
    methods: ["GET", "PUT", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    msg: "welcome to the Ecommerce",
  });
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is runnig now port ${PORT}`));
