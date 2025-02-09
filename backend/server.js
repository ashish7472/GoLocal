import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {dbConnect} from './config/db.js';

// const express = require('express');
const app = express();
dotenv.config();
// require('dotenv').config();
// const dbConnect = require('./config/db');
// const cors = require('cors');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

// default route
app.get('/', (req, res) => {
    res.send('Welcome to the GoLocal API');
});

// routes
import userRoutes from './routes/user.route.js';
import shopRoutes from './routes/shop.route.js';

// mounting the routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', shopRoutes);

dbConnect();
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});