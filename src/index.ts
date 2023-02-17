import express, { Request, Response } from 'express' 
import dotenv from 'dotenv'
import cors from 'cors' 

dotenv.config()
const app = express() 

app.use(cors()) 
app.use(express.json()) 
app.listen(Number(process.env.PORT), () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})