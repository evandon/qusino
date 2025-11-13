export interface RenderResult{
    html:string;
    head?:string;
}

export async function render(
    url:string,
    manifest?:Record<string,any>
):Promise<RenderResult>{
    const appHTML = /*html*/`
    <div id="app">
      <h1 data-route="${url}">Welcome to Qusino (SSR)</h1>
      <button hx-get="/api/ping" hx-target="#app" hx-swap="innerHTML">
        Ping (HTMX)
      </button>
    </div>

    `
    let head = "";
    if (manifest){
        const entry = manifest["src/main.ts"]
        if (entry) {
            head+= `<link rel="modulepreload" href="${entry.file}"/>`
        }
    }
    return {html:appHTML,head}

}