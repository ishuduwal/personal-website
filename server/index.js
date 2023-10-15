import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ContactRouter from './router/Contact.js'

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true })) 
app.use(cors());
app.use('/contact', ContactRouter);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb).then(() =>
 app.listen(PORT, () => console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))