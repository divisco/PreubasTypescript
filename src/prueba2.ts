console.log(typeof "a")
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

type ProductResponse = { data: Product } | { error: string };
const handleResponse=(res: ProductResponse):void=>{
    if ("error" in res) {
        console.error("Error de la API:", res.error);
    } else {
        console.log(`Éxito! El precio de ${res.data.name} es $${res.data.currentPrice}`);
    }
}
const producto1:ProductResponse = {data: new Product("Consola ps4", 20000, 20)}
handleResponse(producto1)