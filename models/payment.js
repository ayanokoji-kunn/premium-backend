const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  subscription_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription', required: true },
  bank_name: { type: String },
  account_number: { type: String },
  amount: { type: Number },
  reference_number: { type: String, required: true },
  status: { type: String, enum: ['pending','verified','failed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema); 