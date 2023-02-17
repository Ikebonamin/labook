import { PostDB } from '../interfaces';
import { BaseDatabase } from './BaseDatabase';

export class PostDatabase extends BaseDatabase {


  public static TABLE_POSTS = "posts"
  public async findPosts(){
  const postDB:PostDB[]= await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
  return postDB}

  public async createPost(newPostDb:PostDB){
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert({newPostDb})
    return newPostDb
  }
  public async findPostById(id:string){
  const [postDB]:PostDB[] | undefined[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS).where({id})
  return postDB
  
}
public async updatePostById(postDB:PostDB){
  await BaseDatabase
  .connection(PostDatabase.TABLE_POSTS)
  .update(postDB)
  .where({id:postDB.id})
}
public async deletePostById(id:string){
  await BaseDatabase
  .connection(PostDatabase.TABLE_POSTS)
  .delete()
  .where({id})
}

}