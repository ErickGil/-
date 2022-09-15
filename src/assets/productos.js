import hieloGrande from "./img/hieloDe10.png";
import hieloChico from "./img/hieloDe2.5.png";
import barra from "./img/barraDeHielo.png";
import jugo from "./img/jugoDeNaranja.png";
import agua from "./img/bidonDeAgua.png";
export const products = [{
    id:1, 
    name: "Bolsa de hielo de 10kg", 
    description: "Bolsa de hielo por 10kg en forma de dedal", 
    price:1800, 
    stock:40, 
    image:hieloGrande, 
    category: "Bolsas"},
    {id:2, 
    name: "bidon de Agua", 
    description: "Bidon de agua purificada envasada", 
    price:2800, 
    stock:20, 
    image:agua, 
    category: "Bidones"},
    {id:3, 
        name: "bidon de Jugo", 
        description: "Bidon de jugo de naranja exprimido naturalmente", 
        price:3000, 
        stock:15, 
        image:jugo, 
        category: "Bidones"}, 
    {id:4, 
        name: "bolsa de hielo de 2,5kg", 
        description: "Bolsa de hielo por 2,5kg en forma de dedal", 
        price:1200, 
        stock:50, 
        image:hieloChico, 
        category: "Bolsas"},
    {id:5, 
        name: "Barra de hielo", 
        description: "Barra compacta de hielo", 
        price:1600, 
        stock:21, 
        image:barra, 
        category: "Barras"}
    ]

