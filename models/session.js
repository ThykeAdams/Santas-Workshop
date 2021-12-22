const { model, Schema } = require("mongoose");

module.exports = model(
  "session",
  new Schema({
    token: { type: String, default: "" },
    cart: { type: Array, default: [] },
  })
)