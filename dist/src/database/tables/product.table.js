"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../shared/constants");
const index_1 = require("../index");
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
        TableName: constants_1.TABLES.PRODUCT,
    };
    index_1.dynamoDB.createTable(params, function (err, data) {
        if (err)
            console.log(err, err.stack);
        else
            console.log(data);
    });
}
createTable();
