import type { Link } from "../../models/guest_links"

export const list = (arr:Link[])=>/*html*/`
    <ul id="nav_list">
        <!-- render link list -->
        ${arr.map((el)=>{
            return/*html*/`
            <li>${el}</li>`
        })}
    </ul>
`