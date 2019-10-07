import express from 'express'
import {login} from "../Controller";

const profileRouter = express.Router({mergeParams: true});

profileRouter.post("/authorize", login);


module.exports = profileRouter;