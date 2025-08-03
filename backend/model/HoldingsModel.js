const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };

// This code defines a Mongoose model for holdings using the HoldingsSchema.
// It exports the model for use in other parts of the application.
