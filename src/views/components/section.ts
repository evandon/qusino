export const section = (...content:string[])=>/*html*/`
    ${content.map((sec)=>/*html*/`
       <section>${sec}</section>
`)}`
