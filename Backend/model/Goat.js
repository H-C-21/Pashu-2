const mongoose = require("mongoose");

const schema = mongoose.Schema;

const goatSchema = new schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    tagNo: { type: String, required: true },
    gender: { type: String },
    breed: { type: String, required: true },
    notes: { type: String },
    howGot: { type: String },
    weight: { type: Number },
    Milk: [{ date: { type: Date }, amount: { type: Number } }],
  },
  { timestamps: true }
);

const Goat = mongoose.model("Goat", goatSchema);
module.exports = Goat;
