import { UserDatabase} from '../database/UserDatabase';
import { Users } from '../Models/Users';
import { IUsersDB } from '../interfaces';



export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase
    ){}
    public getUsers = async ()=>{
        const usersDB:IUsersDB[]= await this.userDatabase.findUsers();
        const users = usersDB.map((userDB) =>new Users(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role,
            userDB.created_at
        ))
        return users
      
    }
}