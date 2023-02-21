import { TABLES } from "../../shared/constants";
import { dynamoDB } from "../index";

function createTable() {
  const params = {
    AttributeDefinitions: [
      {
        AttributeName: "productId",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "productId",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    TableClass: "STANDARD",
    TableName: TABLES.PRODUCT,
  };

  dynamoDB.createTable(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
}

createTable();
