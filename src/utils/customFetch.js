
export const customFetch = (products,id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(products){
                if(id) {
                    const item = products.find((productos) => productos.id === id)
                    resolve(item);
                }else{
                resolve(products) 
                }
            }
        },2000)
    })
}