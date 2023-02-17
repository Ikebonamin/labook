import jwt from 'jsonwebtoken'
import dotenv from 'dotenv' 
import { TokenPayload, USER_ROLES } from './interfaces'
import { BadRequestError } from './Errors/BadRequestError'


dotenv.config()





export class TokenManager {


    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }


    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as TokenPayload
        

				} catch (error) {
            throw new BadRequestError("Token Inválido")
        }
    }
}