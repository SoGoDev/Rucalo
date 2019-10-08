import express from 'express'
import {login, register} from "../Controller";

const profileRouter = express.Router({mergeParams: true});

profileRouter.post("/authorize", login);
profileRouter.post("/register", register);

export default profileRouter
