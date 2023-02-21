import express from "express";
import {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct,
} from "../../controllers/product.controller";
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;
