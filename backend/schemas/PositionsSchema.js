const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema };

// This code defines a Mongoose schema for positions, which includes fields like product, name, quantity, average price, current price, net value, daily change, and whether it is a loss. It exports the schema for use in other parts of the application.
