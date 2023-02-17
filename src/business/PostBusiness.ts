
import { PostDatabase } from '../database/PostsDatabase';
import { BadRequestError } from '../Errors/BadRequestError';
import { NotFoundError } from '../Errors/NotFoundError';
import { PostDB } from '../interfaces';
import { Posts } from '../Models/Posts';



export class PostsBusiness{
    constructor(
        private postDatabase: PostDatabase
    ){}
    
    public getPosts = async()=>{
      const postsDB:PostDB[] = await this.postDatabase.findPosts()
      const posts = postsDB.map((postDB) => new Posts(
        
      postDB.id, 
      postDB.content, 
      postDB.likes, 
      postDB.dislikes, 
      postDB.created_at,
      postDB.updated_at,
      postDB.creator_id,
      postDB.name
      ))
    }
public createPost = async (input:any) =>{
const {id, content, likes, dislikes, createdAt, updatedAt, creatorId, name} = input

if (typeof id !=="string") {
  throw new BadRequestError("Id deve ser uma string")
}
if (typeof name !=="string" || name.length < 2 ) {
  throw new BadRequestError("Nome deve ser uma string e maior de dois caracteres")
}

// ver se existe //
const checkDuplicate = await this.postDatabase.findPostById(id)
// checkDuplicate ? throw new BadRequestError("id Repetido")
if (checkDuplicate){
  throw new BadRequestError("Id Duplicada")
}

const newPost = new Posts(
  id, 
  content,
  likes,
  dislikes,
  createdAt,
  updatedAt,
  creatorId,
  name
)
const postToDb = newPost.toDBModel()
await this.postDatabase.createPost(postToDb)
const output = {message:"Post inserido com sucesso"}
console.log(postToDb);
return output
}
// fim

public UpdatePost = async (input:any) =>{
  const {id, content, likes, dislikes, createdAt, updatedAt, creatorId, name} = input

  if (typeof id !=="string") {
    throw new BadRequestError("Id deve ser uma string")
  }
  if (typeof content !=="string") {
    throw new BadRequestError("content deve ser uma string")
  }
  if (typeof likes !=="number") {
    throw new BadRequestError("likes ou dislikes devem ser números")
  }
  if (typeof dislikes !=="number" ) {
    throw new BadRequestError("likes ou dislikes devem ser números")
  }
  if (typeof name !=="string" || name.length < 2 ) {
    throw new BadRequestError("Nome deve ser uma string e maior de dois caracteres")
  }
const postToEdit = await this.postDatabase.findPostById(id)

if (postToEdit){

  const editedPost = new Posts(
    id, 
    content, 
    likes, 
    dislikes, 
    createdAt,
    updatedAt,
    creatorId,
    name
  )

  // arrumar os métodos //
  id && editedPost.setId(id)
  content && editedPost.setId(id)
  const output = {message: "Post editado com sucesso"}
  return output

}
  else {
    throw new NotFoundError(`Post não encontrado`)
  }
}
public DeletePost = async (input:any) =>{
  const {id} = input

  const PostToDelete = await this.postDatabase.findPostById(id)

  if (PostToDelete){
    await this.DeletePost(PostToDelete.id)
  } else {
    throw new NotFoundError("Post não encontrado")
  }

}
}

