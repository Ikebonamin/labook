import { UserDatabase} from '../database/UserDatabase';
import { Users } from '../Models/Users';
import { IUsersDB } from '../types';



export class UserBusiness{
    public getUsers = async ()=>{
        const usersDatabase = new UserDatabase()
        const usersDB:IUsersDB[]= await usersDatabase.findUsers();

      
    }
}