import { Request, Response } from "express";
import { UserModel } from "../database/models";
import * as bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';
const secret = require('../config/secret')

class AuthController {

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
      where: {
        email
      }
    });

    if (!user){
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
    }

    // if (!bcrypt.compareSync(password, userPassword().password)) {
    //   return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
    // }

    // const token = jwt.sign(
    //   {
    //     id: user[0].id,
    //     email: user[0].email,
    //     name: user[0].name
    //   },
    //   secret.key
    //   );

      // return res.json(token)
    return res.json(user)
  }
}

export default new AuthController();