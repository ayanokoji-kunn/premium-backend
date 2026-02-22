const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  subscription_status: { 
    type: String, 
    enum: ['inactive','pending','active','expired'], 
    default: 'inactive' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);