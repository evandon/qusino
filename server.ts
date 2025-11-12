import express from 'express'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

//place in env file!!!!!!!!
const PORT = 3000
const SITE_URL = "http://localhost"
//place in env file!!!!!!!!
const app = express()
app.use(cors({
    origin:`${SITE_URL}:${PORT}`,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'../public')))



app.listen(PORT||3000,()=>{
    console.log(`App running on http://localhost:${PORT}`)
})