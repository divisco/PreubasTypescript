interface EntidadBase {
    id: number
}
interface DatosUsuario {
    nombre: string,
    email: string
}
type Usuario = DatosUsuario & EntidadBase

class Repositorio<T extends EntidadBase>{
    private items:T[]=[]
    agregar(item: T):void{
        this.items.push(item)
    }
    buscarPorId(id: number):T | undefined{
        const lista = this.items
        return lista.find(e=>e.id === id)
    }
}
const repo = new Repositorio()
const user1:Usuario={
    id: 1,
    nombre: "pepe",
    email: "si"
}
const user2:Usuario={
    id: 2,
    nombre: "plix",
    email: "no"
}
repo.agregar(user1)
repo.agregar(user2)
console.log(repo.buscarPorId(2))