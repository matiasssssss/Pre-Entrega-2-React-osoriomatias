import Item from "./Componentes/Item/Item";

const misProductos = [
    { id: "1", nombre: "Butterfly Knife Esmeralda", precio: 10000, img: "../public/imajenes/Butterfly Knife emerald.jpg", idCat: "2" },
    { id: "2", nombre: "Butterfly Knife Rubi", precio: 7000, img: "../public/imajenes/Butterfly Knife rubi.jpg", idCat: "2" },
    { id: "3", nombre: "Butterfly Knife Zafiro", precio: 7000, img: "../public/imajenes/Butterfly Knife Zafiro.jpg", idCat: "2" },
    { id: "4", nombre: "Balloneta Knife Esmeralda", precio: 10000, img: "../public/imajenes/cuchillo balloneta esmeralda.jpg", idCat: "2" },
    { id: "5", nombre: "Balloneta Knife Rubi", precio: 3000, img: "../public/imajenes/cuchillo balloneta rubi.jpg", idCat: "2" },
    { id: "6", nombre: "Gloves Hedge Maze", precio: 7000, img: "../public/imajenes/Gloves Hedge Maze.jpg", idCat: "3" },
    { id: "7", nombre: "Gloves Slingshot", precio: 12000, img: "../public/imajenes/Gloves Slingshot.jpg", idCat: "3" },
    { id: "8", nombre: "Gloves Pandora's Box", precio: 12000, img: "../public/imajenes/Gloves Pandora's Box.jpg", idCat: "3" },
    { id: "9", nombre: "Gloves Vice", precio: 15000, img: "../public/imajenes/Gloves Vice.png", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}