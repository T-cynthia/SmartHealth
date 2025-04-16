require('dotenv').config();
const app = require('./app');
const connectToMongo = require('./config/db');
const cron = require('node-cron');
const Parent = require('./models/Parent');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sayinzogae@gmail.com',
    pass: 'fqib qxxq mory ewxa'
  }
});

const PORT = process.env.PORT || 5000;

(async () => {
  await connectToMongo();
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})();

// 🕒 Daily reminder at 9 AM
cron.schedule('0 9 * * *', async () => {
  try {
    const parents = await Parent.find({});
    const today = new Date().toISOString().split('T')[0];

    for (const parent of parents) {
      const dob = new Date(parent.baby.dateOfBirth);
      const reminderDate = new Date(dob);
      reminderDate.setDate(dob.getDate() + 30);
      const formattedReminder = reminderDate.toISOString().split('T')[0];

      if (formattedReminder === today) {
        await transporter.sendMail({
          from: 'sayinzogae@gmail.com',
          to: parent.email,
          subject: 'Vaccination Reminder',
          text: `Hello ${parent.fullName},\n\nIt's time for your baby ${parent.baby.fullName}'s first vaccination!\n\nSmartHealth`
        });
        console.log(`📧 Reminder sent to ${parent.email}`);
      }
    }
  } catch (err) {
    console.error('❌ Cron job error:', err);
  }
});
