const INIT_MSG = "SW:";

console.log("SW: Hola Mundo Violeta!");

// Evento de instalación
self.addEventListener("install", (event) => {
  console.log(INIT_MSG, "install");
});

// Todas la peticiones (jpg, js, css) pasan por el fetch
// desde aquí pueden bloquearse o modificarse
self.addEventListener("fetch", (event) => {
  // Mientras no se active el sw esto no se ejecutará

  // Cambia los estilos desde el Service Worker
  if (event.request.url.includes("style.css")) {
    console.log(INIT_MSG, event.request.url);
    const resp = new Response(
      `
        h5 {
            color: red;
        }
        `,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );
    event.respondWith(resp);
  }

  if (event.request.url.includes("pink.png")) {
    console.log(INIT_MSG, event.request.url);
    let foto = fetch('images/red.jpg')
    event.respondWith(foto);
  }
});
