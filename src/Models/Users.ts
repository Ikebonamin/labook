import { IUsersDB, IUsersFront } from '../interfaces'

export class Users {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password:string,
    private role: string,
    private createdAt:string


  ){}
  public getId():string{
    return this.id
  }
  public getName():string{
    return this.name
  }
  public getEmail():string{
    return this.email
  }
  public getPassword():string{
    return this.password
  }
  public getrole(): string{
    return this.role
  }
  public created(): string{
    return this.createdAt
  }
  public setId(value:string): void{
    this.id=value
}
  public setName(value:string): void{
    this.name=value
}
  public setEmail(value:string): void{
    this.email=value
}
  public setPassword(value:string):void{
    this.password=value
}
  public setRole(value:string):void {
    this.role=value
}
public toDBModel():IUsersDB{
  return{
    id: this.id,
    name:this.name,
    email:this.email,
    password:this.password,
    role:this.role,
    created_at:this.createdAt 
  }

}
public toFrontModel():IUsersFront{
  return{
    id: this.id,
    name:this.name,
    email:this.email,
    password:this.password,
    role:this.role,
    createdAt: this.createdAt 
  }
}

}