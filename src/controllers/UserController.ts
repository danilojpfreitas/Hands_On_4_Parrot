import { Request, Response } from "express";
import { UserModel } from "../database/models";
import bcrypt from "bcrypt";

class UserController {

  async find(req: Request, res: Response) {
    try {
      const user = await UserModel.findAll({
        attributes: ['id', 'name', 'email', 'apartment']
      });

      return res.json(user)
    } catch (error) {
      return res.status(404);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const userID = await UserModel.findByPk(id);

      res.status(200).json(userID)
    } catch (error) {
      return res.status(404);
    }
  }

  async cadastro(req: Request, res: Response) {
   try {
    const { name, email, apartment, password } = req.body;

    const newPassword = bcrypt.hashSync(password, 10);

    const user = await UserModel.create({
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

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, apartment, password } = req.body;

      const newPassword = bcrypt.hashSync(password, 10);

      const user = await UserModel.update({
        name,
        email,
        apartment,
        password: newPassword,
      }, {
        where: {
          id: id,
        }
      });

      const userUpdate = await UserModel.findByPk(id)

      res.json(userUpdate);
    } catch (error) {
      return res.status(404);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const userDestroy = await UserModel.findOne({ where: { id }});

      if (!userDestroy) {
        return res.status(404).json("Id not found")
      } else {
        await UserModel.destroy({
          where: {
              id: id,
          }
        })

      res.status(204).json(`${id} deleted`);
      }
    } catch (error) {
      return res.status(400);
    }
  }
}

export default new UserController();