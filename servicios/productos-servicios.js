//GET

const listaProductos = ()=> fetch("http://localhost:3000/producto").then(respuesta => respuesta.json())


export const productoServices = 
{
    listaProductos
}

//Me devuelve db.json a travez del servidor json.