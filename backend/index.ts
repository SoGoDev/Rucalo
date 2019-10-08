import express from 'express';
import bodyParser from 'body-parser';
import Mongo from "./Repository/Mongo";
import profileRouter from "./Modules/Profile/Router";
const app = express();

Mongo.initRepo("users", "ps", "mongodb://localhost:27017");

app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(profileRouter);

app.listen(8000, ()=>{
  console.log("Rucalo")
});
