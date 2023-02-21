import express from "express";
const router = express.Router();
import productRouters from "../routers/products";

router.use("/products", productRouters);

export default router;
