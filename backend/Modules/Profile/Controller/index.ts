import {isEmpty} from 'lodash'
import Mongo from "../../../Repository/Mongo";
import {encryptData} from "../../../Framework/Utils";


export function login(req, res) {
  const { login, password } = req.body;

  Mongo.get({login,password: encryptData(password)})
    .then(function processResult(result){
      if(!isEmpty(result)) return res.sendStatus(200);

    })
}

export function register(req, res) {
  const {login, password} = req.body;

  Mongo.get({login, password: encryptData(password)})
    .then(function processResult(result){
      if(!isEmpty(result)) return;

      Mongo.add({login, password: encryptData(password)}).then(console.log)
    })

}
