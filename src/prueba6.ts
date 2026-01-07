type Status = "pendiente" | "enviado" | "entregado"
interface Order {
    id: string,
    customer: string,
    total: number,
    status: Status
}
class OrderManager<T extends { id: string }>{
    constructor(
        private orders: T[]
    ){

    }
    addOrder(order: T){
        this.orders.push(order)
    }
    
    
    public get value(): T[] {
        return this.orders
    }
    
    
    updateOrder(id: string, changes: Partial<T>){
        const index:number = this.orders.findIndex(order=> order.id==id);
        if (index != -1){
            const updatedOrder = { ...this.orders[index], ...changes } as T
            this.orders[index] = updatedOrder
            return updatedOrder
        }else{
            return undefined
        }
    }
}

const ord1:Order = {
    id: "pepe",
    customer: "pepes",
    total: 20,
    status: "pendiente"
}
const newOrderManager = new OrderManager<Order>([ord1])
console.log("Antes:", [...newOrderManager.value]); 

newOrderManager.updateOrder("pepe", { total: 30 });

console.log("Después:", [...newOrderManager.value]);