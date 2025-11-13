export interface Link{
    label:String,
    href:String,
    active:boolean
}

export const guest_links=(activePath:string):Link[]=>[
    {label:'Home',href:"/",active:activePath==='/'},
    {label:'about',href:"/about",active:activePath==='/about'},
    {label:'blog',href:"/blog",active:activePath==='/blog'},
    {label:'contact',href:"/contact",active:activePath==='/contact'},
]
    
