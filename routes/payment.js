const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Submit a payment reference
router.post('/', async (req, res) => {
  try {
    const { subscription_id, reference_number } = req.body;
    if (!subscription_id || !reference_number) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const payment = new Payment({
      subscription_id,
      reference_number,
      status: 'pending'
    });

    await payment.save();

    res.json({ message: 'Reference submitted, pending verification.', payment });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Admin route to verify payment
router.put('/verify/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    payment.status = 'verified';
    await payment.save();

    res.json({ message: 'Payment verified successfully.', payment });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
