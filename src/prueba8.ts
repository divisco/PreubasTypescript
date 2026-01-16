interface RespuestasApi<T>{
    datos: T | null,
    error: string | null
}

async function obtenerDatos<T>(mockData: T, debeFallar: boolean):Promise<RespuestasApi<T>> {
    return new Promise((resolve)=>{
        setTimeout(() => {
            if (!debeFallar) {
                resolve({ datos: mockData, error: null });
            } else {
                resolve({ datos: null, error: "Error al obtener datos" });
        
            }
        }, 3000);
    })
}
const llamado = await obtenerDatos({name: "Prod1", id: 1}, false)
if (llamado.datos) {
    console.log(llamado.datos)
}
else{
    console.log(llamado.error)
}