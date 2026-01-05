class Product {
    constructor(
        public name:string,
        private price:number,
        private stock:number
    ){

    }
    get currentPrice():number{
        return this.price
    }
    updateStock(cantidad: number):void{
       this.stock=this.stock+cantidad
    }
}
class Almacen<T> {
    constructor(
        private items: T[] = []
    ){

    }
    agregar(item: T):void{
        this.items.push(item)
    }
    get obtenerTodo():T[] {
        return this.items
    }
    eliminarUltimo():void{
        this.items.pop()
    }
}
const almacenA = new Almacen<string>([])
const almacenB = new Almacen<Product>([])
almacenA.agregar("Pablo")

const prod1: Product = new Product("ps5", 20000, 20)
almacenB.agregar(prod1)