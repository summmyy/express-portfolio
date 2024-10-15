const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;
const contactRoutes = require('./server/routes/contactRoutes');
const userRoutes = require('./server/routes/userRoutes');

const MONGODB_URI= 'mongodb+srv://<sunmibolaj13>:<Sunmi123>@cluster0.rfsto.mongodb.net/?retryWrites=tru