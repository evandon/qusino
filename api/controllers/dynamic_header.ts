import { top_header } from "../views/elements/top";
import { guest_links } from "../models/guest_links";

// check if user is logged in 
// set propper components 
// dispatch html


const user = {
    userName:'john Dough', 
    userId:'uuid-goes-here-okay',
    wallet:'THISISTHESIXTYCHARACTERWALLETKEYTHATYOUWILLLOGINWITH',
    loggedIn:true
}

export const dynamic_header = (activeLink:string)=>{
    try{
        if(!user.loggedIn){
             return /*html*/`
            ${top_header(guest_links(activeLink),false)}
        `
        }
    }catch(err){

    }
}