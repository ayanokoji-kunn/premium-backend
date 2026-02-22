const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan_type: { type: String, enum: ['monthly','yearly'], required: true },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date },
  status: { type: String, enum: ['pending','active','expired'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);