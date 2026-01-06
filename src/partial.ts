interface Productos {
    id: number,
    name: string,
    stock: number,
    price: number
}
const prod1: Productos = {
    id: 2,
    name: "ps5",
    stock: 3,
    price: 20
}
console.log({...prod1})

// ahora con mala practica y poco eficaz no uso de partial
function updateItem<T>(obj: T, updates: number): T {
    return { ...obj, stock: updates }; 
}
let newProd1 = updateItem(prod1, 21)//esta funcion entonces sirve solo para esa propiedad
console.log(newProd1)

function updateItemPartial<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates }; 
}
newProd1 = updateItemPartial(prod1, {stock: 20} as Productos)//esta funcion entonces sirve solo para esa propiedad
console.log(newProd1)
