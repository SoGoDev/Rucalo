import Mongo from "../../../Repository/Mongo";

export function login(req, res) {
  const { login, password } = req.body;

  Mongo.get({login, password})
}