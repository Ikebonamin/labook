export class Users {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password:string,
    private role: string,
    private created_at:string

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
    return this.created_at
  }
  public setId(value:string){
    this.id=value
}
  public setName(value:string){
    this.name=value
}
  public setEmail(value:string){
    this.email=value
}
  public setPassword(value:string){
    this.password=value
}
  public setRole(value:string){
    this.role=value
}
}