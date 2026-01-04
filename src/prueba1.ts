interface Hero{
    id: number,
    name: string,
    powerLevel: number,
    isActive: boolean,
    rol: HeroRole
}
type HeroRole = {
    Lider?: boolean,
    Apoyo?: boolean,
    Estratega?: boolean

}
const saludo = (Hero: Hero):string=>{
    const {name,id,isActive,powerLevel,rol} = Hero
    const tablaRoles = `
        - Lider: ${rol.Lider ?? false}
        - Apoyo: ${rol.Apoyo ?? false}
        - Estratega: ${rol.Estratega ?? false}`;

    return `Héroe: ${name} (ID: ${id})
        Estado: ${isActive ? "Activo" : "Inactivo"}
        Poder: ${powerLevel}
        Roles registrados:${tablaRoles}`;
}


const Wolverine:Hero = {
    id: 20,
    name: "Wolverine",
    powerLevel: 500,
    isActive: true,
    rol: {Lider:true}
}
console.log(saludo(Wolverine))