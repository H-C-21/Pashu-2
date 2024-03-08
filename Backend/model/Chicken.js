const mongoose = require("mongoose");

const schema = mongoose.Schema;

const chickenSchema = new schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    flockSize: { type: Number, required: true },
    breed: { type: String, required: true },
    purpose: { type: String, required: true },
    flockNumber: { type: Number, required: true },
    notes: { type: String },
    eggs: [{ date: { type: Date }, amount: { type: Number } }],
  },
  { timestamps: true }
);

const Chicken = mongoose.model("Chicken", chickenSchema);
module.exports = Chicken;
