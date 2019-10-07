import express from 'express';
import Mongo from "./Repository/Mongo";
const app = express();

Mongo.initRepo("users", "ps", "mongodb://localhost:27017");

app.listen(8000);
