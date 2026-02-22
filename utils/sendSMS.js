const twilio = require('twilio');

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE, // your Twilio number
      to
    });
    console.log('SMS sent successfully');
  } catch (err) {
    console.error('Error sending SMS:', err);
  }
};

module.exports = sendSMS;