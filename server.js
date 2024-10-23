const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 3001;
const contactRoutes = require('./server/routes/contactRoutes');
const userRoutes = require('./server/routes/userRoutes');
// const { config } = require('./config/config');
// import config from './config/config.js';

const MONGODB_URI= "mongodb+srv://sunmibolaj13:Sunmi123@cluster0.rfsto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to your MongoDB database! \n Have fun!'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send({ "message": 'Welcome to my portfolio application' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
