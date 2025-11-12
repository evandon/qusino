import "htmx.org"
 
declare global {
  interface Window {
    htmx: any; // Or a more specific type definition if available
  }
}
window.htmx = import('htmx.org');