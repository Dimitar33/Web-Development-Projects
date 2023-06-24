import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/fruitsDB",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});