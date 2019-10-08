import express from 'express';
import bodyParser from 'body-parser';
import Mongo from "./Repository/Mongo";
import profileRouter from "./Modules/Profile/Router";
const app = express();

Mongo.initRepo("users", "ps", "mongodb://localhost:27017");

app.use([bodyParser.json(), bodyParser.urlencoded({extended: true})]);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(profileRouter);

app.listen(8000, ()=>{
  console.log("Rucalo")
});
