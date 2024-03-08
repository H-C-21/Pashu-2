const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId },
    amount: { type: Number },
    information: { type: String },
    type:{type:String},
    reason:{type:String}
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;