import express from "express"
import cors from "cors"
import {createServer as createViteServer} from "vite"
import * as path from "path"
import * as fs from "fs"
import {config} from 'dotenv'
import { fileURLToPath } from "url";
import { dirname } from "path";
import {createServer} from "node:http"
import { Server } from "socket.io"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config()

const domain = process.env.DOMAIN 
const PORT = process.env.PORT
const isProd = process.env.NODE_ENV === "Production"

//crank up the express app
const app = express()

//cors business
app.use(cors({
    origin:isProd?`${domain}:${PORT}`:'*',
    credentials:true
}))
// const io = new Server()
const httpServer = createServer(app)
const io = new Server(httpServer,{
    path: "/chat/",
    cors:{
        origin:[`${domain}`]}
})

// vite stuff
const vite = await createViteServer({
    server: {middlewareMode:true},
    appType:"custom"
})
app.use(vite.middlewares);


if (isProd){
    //switch to dist files when Prod server is in use. 
    const dist = path.resolve(__dirname,"dist/client");
    app.use(express.static(dist,{index:false}))
}

app.get("*",async(req,res)=>{
    try{
        const url = req.originalUrl
        if(!isProd){
            //template transfromation + ssr entry. 
            const template = await vite.transformIndexHtml(
                url,
                fs.readFileSync(path.resolve(__dirname,'index.html'),"utf-8")
            );
            const {render} = await vite.ssrLoadModule("/src/entry-server.ts")
            const {html:appHTML,head} = await render(url)
            const finalHtml = template
            //although you can change the head & appHTML tag values, DONT!
                .replace(`<!--ssr-head-->`,head ?? "")
                .replace(`<!--ssr-outlet-->`,appHTML ?? "")
            res.status(200).set({"Content-Type":"text/html"}).send(finalHtml)
            return
        }
        
    }
    catch(e:any){
        //vite error formatting
        if(!isProd) vite.ssrFixStacktrace(e)
        console.error(e)
        res.status(500).send({msg:`Internal Server Error:${e.message}`})
        return
    }
})


io.on('connection',(socket)=>{
    console.log('a user connected')
})
app.listen(PORT, () => {
    console.log(`Server listening on ${domain}:3000`);
  });



