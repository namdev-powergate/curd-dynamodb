"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.editProduct = exports.createProduct = exports.getProducts = void 0;
const product_service_1 = require("../services/product.service");
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_service_1.fetchProducts)();
    return res.status(200).json(products);
});
exports.getProducts = getProducts;
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_service_1.addProduct)(req.body);
    return res.status(200).json({ message: "create product success" });
});
exports.createProduct = createProduct;
const editProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_service_1.updateProduct)(req.params.id, req.body);
    return res.status(200).json({ message: "update product success" });
});
exports.editProduct = editProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_service_1.removeProduct)(req.params.id);
    return res.status(200).json({ message: "delete product success" });
});
exports.deleteProduct = deleteProduct;
