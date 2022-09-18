import hieloGrande from "./img/Bolsa10Kg.png";
import hieloChico from "./img/Bolsa2.5Kg.png";
import barra from "./img/UnaBarra.png";
import jugo from "./img/JugoDeNaranja.png";
import agua from "./img/BidonDeAgua.png";
export const products = [{
    id:1, 
    name: "Bolsa de hielo de 10kg", 
    description: "Bolsa de hielo por 10kg en forma de dedal", 
    price:1800, 
    stock:40, 
    image:hieloGrande, 
    category: "Bolsas"},
    {id:2, 
    name: "Bidon de Agua", 
    description: "Bidon de agua purificada envasada de 6 litros", 
    price:2800, 
    stock:20, 
    image:agua, 
    category: "Bidones"},
    {id:3, 
        name: "Bidon de Jugo", 
        description: "Bidon de jugo de naranja exprimido naturalmente", 
        price:3000, 
        stock:15, 
        image:jugo, 
        category: "Bidones"}, 
    {id:4, 
        name: "Bolsa de hielo de 2,5kg", 
        description: "Bolsa de hielo por 2,5kg en forma de dedal", 
        price:1200, 
        stock:50, 
        image:hieloChico, 
        category: "Bolsas"},
    {id:5, 
        name: "Barra de hielo", 
        description: "Barra compacta de hielo en 2 bolsa de 10kg cada una", 
        price:1600, 
        stock:21, 
        image:barra, 
        category: "Barras"}
    ]

