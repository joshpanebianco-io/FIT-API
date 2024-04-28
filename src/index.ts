import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import mongoose from 'mongoose';

const { Sequelize } = require('sequelize');
const path = require('path');





require('dotenv').config();


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//const server = http.createServer(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



app.get('/', (req, res) => {
    res.send('Hello World');
});