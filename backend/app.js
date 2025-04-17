const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const adminRoutes = require('./routes/adminRoutes')
const newbornRoutes = require('./routes/newbornRoutes')
// const parentRoutes = require('./routes/parentRoutes');
const userRoutes = require('./routes/userRoutes'); 

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', routes);
app.use('/api/admin', adminRoutes);
app.use('/api/newborns', newbornRoutes);
// app.use('/api/parents', parentRoutes);
app.use('/api/users', userRoutes); 

module.exports = app;
