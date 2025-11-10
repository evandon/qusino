import express from 'express'
import cors from 'cors'
import {homepageTemplate} from './views/index.js'
import { top } from './views/elements/top.js'
import { nav } from './views/components/nav.js'
import { navList } from './models/navList.js'


const app = express()
app.use(cors())
const PORT = 3000
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
const corsOptions ={
  origin: ['http://localhost:5500/*','http://localhost:3000/*'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/',cors(corsOptions),()=>{
    res.send('success')
})
app.get('/header',(req,res)=>{
  return res.send(
    `<div>Qusino</div>`
  )
})

app.listen(PORT||3000,()=>{
    console.log(`App running on http://localhost:${PORT}`)
})