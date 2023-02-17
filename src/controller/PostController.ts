import {Request, Response} from "express"
import { PostsBusiness } from '../business/PostBusiness';
import { BaseError } from '../Errors/BaseError';

export class Postcontroller{
  constructor(
    private postBusiness: PostsBusiness
  ){}
  public getPosts = async(req:Request, res: Response) => {
    try {
      const output = await this.postBusiness.getPosts()
      res.status(200).send(output)
  }
  catch (error) {
    console.log(error)

    if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message)
    } else {
        res.status(500).send("Erro inesperado")
    }
}
}

public createPost = async(req:Request, res:Response) => {
  try{
    const input = {
      id: req.body.id,
      content: req.body.content,
      likes:req.body.likes,
      dislikes:req.body.dislikes,
      createdAt:req.body.vreatedAt,
      updatdeAr:req.body.updatedAt

    }
    const output = await this.postBusiness.createPost(input)
    res.status(200).send(output)
  } catch (error){
    console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
  }
}


public updatePost = async(req:Request, res:Response) => {
  try{
    const input = {
      id: req.body.id,
      content: req.body.content,
      likes:req.body.likes,
      dislikes:req.body.dislikes,
      createdAt:req.body.vreatedAt,
      updatdeAr:req.body.updatedAt

    }
    const output = await this.postBusiness.UpdatePost(input)
    res.status(200).send(output)
  } catch (error){
    console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
  }
}
public deletePost = async(req:Request, res:Response) => {
  try{
    const input = {
      id: req.body.id,
    }
    const output = await this.postBusiness.DeletePost(input)
    res.status(200).send(output)
  } catch (error){
    console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
  }
}
}
