export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}



export interface PostFront {

id:string, 
content: string,
likes:number,
dislikes:number,
createdAt: string,
updatedAt: string,
creator: {
  id: string
  name: string
   }
}


export interface IUsersDB{
  id:string,
  name:string,
  email:string,
  password: string,
  role: string,
  created_at: string
};
export interface IUsersFront{
  id:string,
  name:string,
  email:string,
  password: string,
  role: string,
  createdAt: string
};


export interface SignUpInput {
  name:string,
  email:string,
  password:string
}

export interface SignupOutput {
  token:string
}

export interface LoginInput {
  email:string,
  password:string,
}
export interface LoginOutput {
  token:string
}

export interface PostDB {
  id: string, 
  name:string,
  creator_id:string, 
  content:string, 
  likes:number, 
  dislikes:number, 
  created_at: string,
  updated_at: string,

}

