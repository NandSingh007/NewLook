const mongoose = require("mongoose");

const AmountRecordSchema = new mongoose.Schema({
  amount: {
    type: Number
  },

  token: {
    type: String
  }
});

const AmountRecord = mongoose.model("AmountRecord", AmountRecordSchema);

module.exports = AmountRecord;
