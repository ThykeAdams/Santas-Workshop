const { model, Schema } = require("mongoose");

module.exports = model(
  "user",
  new Schema({
    username: { type: String, default: "" },
    password: { type: String, default: "" },
    orders: { type: Array, default: [] },
    tokens: { type: Array, default: [] },

  })
)