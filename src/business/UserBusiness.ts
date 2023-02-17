import { UserDatabase} from '../database/UserDatabase';
import { Users } from '../Models/Users';
import { IUsersDB } from '../interfaces';
import { IdGenerator } from '../services/IdGenerator';



export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator:IdGenerator
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

    public createUser  = async (input: string) => {
        const {name:string, email, password, role, createdAt}  = input
        
        // validações de regra de negócio//
        
const id = this.idGenerator.generate()
console.log("gerador de ID user Business", id);


const newUser = new Users(
    id,
    name,
    email,
    password,
    role,
    createdAt
)
}}