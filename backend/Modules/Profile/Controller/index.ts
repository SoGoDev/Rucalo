import Mongo from "../../../Repository/Mongo";
import {encryptData} from "../../../Framework/Utils";

export function login(req, res) {
  const { login, password } = req.body;

  // Mongo.get({login, password})
}

export function register(req, res) {


}
