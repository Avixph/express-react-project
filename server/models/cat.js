const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cat = new Schema(
  {
    name: { type: String, required: true },
    chonkyness: { type: String, required: true },
    imagelink: { type: String, required: true },
    biography: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("cats", Cat);
