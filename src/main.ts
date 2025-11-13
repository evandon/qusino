import './style.css'
import '../src/lib/htmx_global'

// import Landing from './views/pages/landing'
// import dashboard from './views/pages/dashboard'
// import { top_header } from './views/elements/top'
// import { guest_links } from './models/guest_links'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
<div 
  id="app" 
  hx-get="/" 
  hx-target="#app" 
  hx-swap="innerHTML">
<!-- Site content-->
<header
  id="header" 
  hx-get="/top_header" 
  hx-target="#header" 
  hx-swap="outerHTML"
>
  Hello Dude
</header>
</div>
`
