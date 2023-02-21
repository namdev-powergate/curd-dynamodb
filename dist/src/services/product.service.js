"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.removeProduct = exports.updateProduct = exports.addProduct = exports.fetchProducts = exports.getProductById = void 0;
const uuid = __importStar(require("uuid"));
const database_1 = require("../database");
const constants_1 = require("../shared/constants");
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        Key: {
            productId: id,
        },
        TableName: constants_1.TABLES.PRODUCT,
        ConsistentRead: true,
    };
    return yield database_1.dynamoClient.get(params).promise();
});
exports.getProductById = getProductById;
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: constants_1.TABLES.PRODUCT,
    };
    const result = yield database_1.dynamoClient.scan(params).promise();
    return result;
});
exports.fetchProducts = fetchProducts;
const addProduct = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, sku, price } = body;
    const params = {
        Item: {
            productId: uuid.v4(),
            name,
            sku,
            price,
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: constants_1.TABLES.PRODUCT,
    };
    yield database_1.dynamoClient.put(params).promise();
});
exports.addProduct = addProduct;
const updateProduct = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, exports.getProductById)(id);
    if (!product)
        throw new Error("Product not found");
    const { name, sku, price } = body;
    const params = {
        Item: {
            productId: id,
            name,
            sku,
            price,
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: constants_1.TABLES.PRODUCT,
    };
    yield database_1.dynamoClient.put(params).promise();
});
exports.updateProduct = updateProduct;
const removeProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, exports.getProductById)(id);
    if (!product)
        throw new Error("Product not found");
    const params = {
        Key: {
            productId: id,
        },
        TableName: constants_1.TABLES.PRODUCT,
        ConsistentRead: true,
    };
    yield database_1.dynamoClient.delete(params).promise();
});
exports.removeProduct = removeProduct;
