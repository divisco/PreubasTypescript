console.log("Empezo")
interface Item {
    id: number,
    name: string,
    price: number
}

type CartItem = Item &{
    quantity: number
}
abstract class DatabaseService<T>{
    abstract save(data: T): Promise<string>;
}
class CartService extends DatabaseService<CartItem>{
    async save(data: CartItem): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Usamos RESOLVE para devolver el valor
                resolve(`Producto ${data.name} guardado con éxito.`);
            }, 1000);
        });
    }
}
function updateItem<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates }; // Retornamos un nuevo objeto con los cambios
}
const carrito = new CartService()
const prod1:CartItem={
    id: 1,
    name: "Ps5",
    price: 20000,
    quantity: 20
}
carrito.save(prod1).then(msg => console.log(msg))
const itemActualizado = updateItem(prod1, { quantity: 22 });

console.log("Original:", prod1.quantity);      // 20
console.log("Actualizado:", itemActualizado.quantity); // 22