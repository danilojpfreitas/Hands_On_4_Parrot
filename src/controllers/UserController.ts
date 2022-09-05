import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel"
import bcrypt from "bcrypt";

class UserController {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}

  async create(req: Request, res: Response) {
   try {
    let { name, email, apartment, password } = req.body;

    let newPassword = bcrypt.hashSync(password, 10);

    let user = await UserModel.create({
      name,
      email,
      apartment,
      password: newPassword
    });

    return res.status(201).json(user)
    } catch (error) {
    return res.status(405).json(error)
    } 
  }

  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new UserController();