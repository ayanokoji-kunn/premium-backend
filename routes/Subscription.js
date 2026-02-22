const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription'); // make sure filename matches

router.post('/', async (req, res) => {
  try {
    const { user_id, plan_type, bank_name } = req.body;
    if (!user_id || !plan_type || !bank_name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const subscription = new Subscription({
      user_id,
      plan_type,
      status: 'pending'
    });

    await subscription.save();
    res.json({ message: 'Subscription created, bank details sent.', subscription });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;