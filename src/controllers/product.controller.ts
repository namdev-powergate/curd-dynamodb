import { Request, Response, NextFunction } from "express";
import {
  addProduct,
  fetchProducts,
  removeProduct,
  updateProduct,
} from "../services/product.service";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await fetchProducts();
  return res.status(200).json(products);
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await addProduct(req.body);
  return res.status(200).json({ message: "create product success" });
};

export const editProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await updateProduct(req.params.id, req.body);
  return res.status(200).json({ message: "update product success" });
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await removeProduct(req.params.id);
  return res.status(200).json({ message: "delete product success" });
};
