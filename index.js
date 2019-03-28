const bongodb = require("mongodb");

module.exports = {
  ...bongodb,
  BongoClient: bongodb.MongoClient
};
