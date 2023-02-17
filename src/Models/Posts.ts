import { PostDB, PostFront } from '../interfaces';

export class Posts {
  constructor(
    private id: string, 
    private content:string, 
    private likes:number, 
    private dislikes:number, 
    private createdAt: string,
    private updatedAt: string,
    private creatorId:string,
    private name:string
    
  ){}
  
  public getId():string{
    return this.id
  }
 
  public getContend():string{
    return this.content
  }

  public getLikes():number{
    return this.likes
  }
  public getDislikes():number{
    return this.likes
  }
  public getName():string{
    return this.name
  }
  public setId(value:string){
    this.id = value
  }
 
  public toDBModel():PostDB{
    return{
       id: this.id,
       creator_id: this.creatorId, 
       content:this.content,
       likes:this.likes,
       dislikes:this.dislikes,
       created_at: this.createdAt,
       updated_at: this.updatedAt,
       name: this.name
    }
  }
  public toFrontModel():PostFront{
    return{
      id: this.id,
      content:this.content,
      likes:this.likes,
      dislikes:this.dislikes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      creator: {
        id:this.id,
        name:this.name
      }
    }
  }
}


