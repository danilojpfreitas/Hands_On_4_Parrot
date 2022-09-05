import { PostModel } from "../database/models";
import { Request, Response } from "express";

class PostController {

  async find(req: Request, res: Response) {
    try {
      const post = await PostModel.findAll({
        attributes: ['id', 'contentText', 'created_at']
      });

      return res.json(post)
    } catch (error) {
      return res.status(404);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const postID = await PostModel.findByPk(id);

      res.status(200).json(postID)
    } catch (error) {
      return res.status(404);
    }
  }

  async create(req: Request, res: Response) {
   try {
    const { contentText } = req.body;

    const post = await PostModel.create({
      contentText,
    });

    return res.status(201).json(post)
    } catch (error) {
    return res.status(405).json(error)
    } 
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { contentText } = req.body;

      const post = await PostModel.update({
        contentText
      }, {
        where: {
          id: id,
        }
      });

      const postUpdate = await PostModel.findByPk(id)

      res.json(postUpdate);
    } catch (error) {
      return res.status(404);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const postDestroy = await PostModel.findOne({ where: { id }});

      if (!postDestroy) {
        return res.status(404).json("Id not found")
      } else {
        await PostModel.destroy({
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

export default new PostController();