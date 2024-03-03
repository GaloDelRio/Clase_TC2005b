filesystem = require('fs');
const html_header = 
    `<!DOCTYPE html>
    <html>
    <script src="https://cdn.tailwindcss.com"></script>
    <head>
        <meta charset="UTF-8">
        <title>Mi Librería</title>
    </head>
    <body class="font-sans">
        <nav class="bg-blue-500 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Brand/logo -->
                <a href="#" class="text-white font-bold text-2xl">Lab 10</a>

                <!-- Navbar links -->
                <div class="space-x-4">
                    <a href="#" class="text-white hover:bg-blue-700 hover:shadow-md py-4 px-3 rounded-sm">Home</a>
                    <a href="/Add" class="text-white hover:bg-blue-700 hover:shadow-md py-4 px-3 rounded-sm">Add</a>
                    <a href="#" class="text-white hover:bg-blue-700 hover:shadow-md py-4 px-3 rounded-sm">Services</a>
                    <a href="#" class="text-white hover:bg-blue-700 hover:shadow-md py-4 px-3 rounded-sm">Contact</a>
                </div>
            </div>
        </nav>

    </body>
    </html>`;

    const joyeria = [
        {
            nombre: "Anillo de Diamantes", 
            material: "Oro blanco", 
            precio: "$5000", 
            tipo: "Anillo de compromiso", 
            imagen: 'https://www.costco.com.mx/medias/sys_master/products/h32/hcf/79532090851358.webp',
            descripcion: "Este hermoso anillo de diamantes está hecho de oro blanco y es perfecto para una ocasión especial como un compromiso."
        },
        {
            nombre: "Collar de Perlas", 
            material: "Plata", 
            precio: "$800", 
            tipo: "Collar", 
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_923570-MLM26506211797_122017-O.webp',
            descripcion: "Un elegante collar de perlas que complementará tu estilo con su diseño único y acabado de plata."
        }, 
        {
            nombre: "Pulsera de Zafiros", 
            material: "Oro amarillo", 
            precio: "$2500", 
            tipo: "Pulsera", 
            imagen: 'https://joyeriarealdecatorce.com/wp-content/uploads/2020/04/GRBRAM_001.1-600x450.png',
            descripcion: "Luce elegante y sofisticada con esta pulsera de zafiros, montada en oro amarillo para un toque de lujo adicional."
        },
        {
            nombre: "Pulsera de Zafiros", 
            material: "Oro amarillo", 
            precio: "$2500", 
            tipo: "Pulsera", 
            imagen: 'https://joyeriarealdecatorce.com/wp-content/uploads/2020/04/GRBRAM_001.1-600x450.png',
            descripcion: "Luce elegante y sofisticada con esta pulsera de zafiros, montada en oro amarillo para un toque de lujo adicional."
        }
    ];



    const http = require('http');
    const server = http.createServer( (request, response) => {
    console.log(request.url);
    if(request.url == "/"){

        response.write(html_header);
        response.write(`<!doctype html>
        <html>
          <script src="https://cdn.tailwindcss.com"></script>
          <head>
            <title>Lab 10</title>
          </head>
          
          <body class="bg-gray-100">
    <h1 class="text-center text-blue-900 italic text-3xl py-6 hover:text-red-500 hover:text-4xl">
        Joyas
    </h1>

    <!-- Inicio del bucle de filas -->
    ${Array.from({ length: Math.ceil(joyeria.length / 3) }, (_, i) => `
        <ul class="flex justify-center gap-8 my-12">
            <!-- Inicio del bucle de artículos por fila -->
            ${joyeria.slice(i * 3, (i + 1) * 3).map(item => `
                <li class="py-6 px-8 bg-white shadow-md">
                    <div class="text-center">
                        <p class="text-gray-900 font-semibold">${item.nombre}</p>
                        <img src="${item.imagen}" alt="${item.nombre}" class="mt-4 mx-auto w-48 h-48 object-cover rounded-full">
                        <!-- Agregar la descripción -->
                        <p class="text-gray-700 mt-4">${item.descripcion}</p>
                        <p class="text-gray-700 mt-2">${item.precio}</p>
                        <button class="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">Comprar</button>
                    </div>
                </li>
            `).join('')}
            <!-- Fin del bucle de artículos por fila -->
        </ul>
    `).join('')}
    <!-- Fin del bucle de filas -->
</body>

        </html>`);
    response.end();

} else if (request.url == "/Add" && request.method == "GET") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`<!doctype html>
    <html>
      <script src="https://cdn.tailwindcss.com"></script>
      <head>
        <title>Lab 10</title>
        <body class="bg-gray-100 flex justify-center items-center h-screen">
            <form action="/Add" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value="Pulsera de Zafiros" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="material">Material</label>
                    <input type="text" id="material" name="material" value="Oro amarillo" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="precio">Precio</label>
                    <input type="text" id="precio" name="precio" value="$2500" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="tipo">Tipo</label>
                    <input type="text" id="tipo" name="tipo" value="Pulsera" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="descripcion">Descripción</label>
                    <textarea id="descripcion" name="descripcion" rows="4" cols="50" class="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">Luce elegante y sofisticada con esta pulsera de zafiros, montada en oro amarillo para un toque de lujo adicional.</textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="imagen">Imagen</label>
                    <input type="text" id="imagen" name="imagen" value="https://joyeriarealdecatorce.com/wp-content/uploads/2020/04/GRBRAM_001.1-600x450.png" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </body>`)

      response.end();
    
} else if (request.url == "/Add" && request.method == "POST") {
    const datos = [];
    
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        let nombre = datos_completos.split('&')[0].split('=')[1];
        console.log(nombre);
        let material = datos_completos.split('&')[1].split('=')[1];
        console.log(material);
        let precio = datos_completos.split('&')[2].split('=')[1];
        console.log(precio);
        let tipo = datos_completos.split('&')[3].split('=')[1];
        console.log(tipo);
        let descripcion = datos_completos.split('&')[4].split('=')[1];
        console.log(descripcion);
        let imagen = datos_completos.split('&')[5].split('=')[1];
        
        nombre = decodeURIComponent(nombre);
        material = decodeURIComponent(material);
        precio = decodeURIComponent(precio);
        tipo = decodeURIComponent(tipo);
        descripcion = decodeURIComponent(descripcion);
        imagen = decodeURIComponent(imagen);
        descripcion = descripcion.replace(/\+/g, ' ');
        nombre = nombre.replace(/\+/g, ' ');

        console.log(imagen);
        joyeria.push({
            nombre: nombre, 
            material: material,  
            precio: precio, 
            tipo: tipo,
            descripcion: descripcion,
            imagen: imagen,
        });
        response.end();
    });
}else {

    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <div class="bg-gray-200 p-4">
            <div class="container mx-auto">
                <h2 class="text-2xl font-bold text-red-500">Status CODE 404</h2>
            </div>
        </div>
    `);
    response.end();
    
      }
});





server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
});

