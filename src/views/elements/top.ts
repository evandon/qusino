import { lock } from "../components/svg/lock.ts"
import {nav } from "../components/nav.ts"
import { list } from "../components/list.ts"
import type { Link } from "../../models/guest_links.ts"


// main header //

export const top_header = (li:Link[],account:boolean) => /*html*/`
        <header id="top_header">
            <div class='logo'>
                QUSINO
            </div>
            ${nav(list(li))}
            <!--check for active account and display account tile-->
            ${account&&/*html*/`
                <div id="account" class="account" >
                <div class="avatar">
                    JD
                </div>
                ${lock(20,20)}
            </div>
            `}
            
        </header>
    ` 