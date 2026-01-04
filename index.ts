interface Hero{
    id: number,
    name: string,
    powerLevel: number,
    isActice: boolean,
    Rol: HeroRole
}
type HeroRole = {
    Lider?: boolean,
    Apoyo?: boolean,
    Estratega?: boolean

}
const saludo = (Hero: Hero):string=>{
    const {name,id,isActice,powerLevel,Rol} = Hero
    return `Este esl heroe ${name} de id ${id} que esta en estado ${isActice} con un poder de ${powerLevel}. esta es su tabla de poderes ${Rol}`
}

const Wolverine:Hero = {
    id: 20,
    name: "Wolverine",
    powerLevel: 500,
    isActice: true,
    Rol: {Lider:true}
}
saludo(Wolverine)