import { conection } from './conection.js'

export async function listarRoupas() {
    const comando = `
    SELECT * FROM roupas;
    `

    let [registros] = await conection.query(comando);
    return registros;
}