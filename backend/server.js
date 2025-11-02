// server.js
// import adminRoutes from './routes/adminRoutes.js';
// import nurseRoutes from './routes/nurseRoutes.js';
require('dotenv').config();
const app = require('./app');
const connectToMongo = require('./config/db');
const cron = require('node-cron');
const Newborn = require('./models/Newborn');
const africastalking = require('africastalking');

const credentials = {
  apiKey: process.env.AT_API_KEY || 'your_api_key_here',
  username: process.env.AT_USERNAME || 'your_username_here'
};

const sms = africastalking(credentials).SMS;

const PORT = process.env.PORT || 5000;

(async () => {
  await connectToMongo();
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})();

// 🕒 Daily reminder at 9 AM for upcoming vaccines
cron.schedule('0 9 * * *', async () => {
  try {
    const newborns = await Newborn.find({});
    const today = new Date();
    const reminderDate = new Date(today);
    reminderDate.setDate(today.getDate() + 3); // Remind 3 days before

    for (const newborn of newborns) {
      if (newborn.vaccines) {
        for (const vaccine of newborn.vaccines) {
          if (vaccine.status === 'Upcoming') {
            const dueDate = new Date(vaccine.dueDate);
            if (dueDate <= reminderDate && dueDate >= today) {
              const phoneNumber = newborn.motherPhone ? newborn.motherPhone : newborn.fatherPhone;
              if (phoneNumber) {
                // Ensure phone number starts with +250
                const formattedPhone = phoneNumber.startsWith('+250') ? phoneNumber : `+250${phoneNumber.replace(/^0/, '')}`;
                const message = `Hello ${newborn.motherName}, remember your child ${newborn.childName} has a vaccination for ${vaccine.name} on ${dueDate.toLocaleDateString()}. Please visit the health center. - SmartHealth`;

                try {
                  const result = await sms.send({
                    to: [formattedPhone],
                    message: message
                  });
                  console.log(`📱 SMS reminder sent to ${formattedPhone} for ${vaccine.name}`);
                } catch (smsError) {
                  console.error(`❌ Failed to send SMS to ${formattedPhone}:`, smsError);
                }
              }
            }
          }
        }
      }
    }
  } catch (err) {
    console.error('❌ Cron job error:', err);
  }
});
