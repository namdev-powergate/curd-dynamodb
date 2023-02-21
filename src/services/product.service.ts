import * as uuid from "uuid";
import { dynamoClient } from "../database";
import { TABLES } from "../shared/constants";

export const getProductById = async (id: string) => {
  const params = {
    Key: {
      productId: id,
    },
    TableName: TABLES.PRODUCT,
    ConsistentRead: true,
  };

  return await dynamoClient.get(params).promise();
};

export const fetchProducts = async () => {
  const params = {
    TableName: TABLES.PRODUCT,
  };
  const result = await dynamoClient.scan(params).promise();

  return result;
};

export const addProduct = async (body: any) => {
  const { name, sku, price } = body;
  const params = {
    Item: {
      productId: uuid.v4(),
      name,
      sku,
      price,
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: TABLES.PRODUCT,
  };

  await dynamoClient.put(params).promise();
};

export const updateProduct = async (id: string, body: any) => {
  const product = await getProductById(id);

  if (!product) throw new Error("Product not found");

  const { name, sku, price } = body;
  const params = {
    Item: {
      productId: id,
      name,
      sku,
      price,
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: TABLES.PRODUCT,
  };

  await dynamoClient.put(params).promise();
};

export const removeProduct = async (id: string) => {
  const product = await getProductById(id);

  if (!product) throw new Error("Product not found");

  const params = {
    Key: {
      productId: id,
    },
    TableName: TABLES.PRODUCT,
    ConsistentRead: true,
  };

  await dynamoClient.delete(params).promise();
};
