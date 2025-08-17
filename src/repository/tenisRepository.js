import { conection } from "./conection.js";

export async function listarTenis() {
    const comando = `
    SELECT * FROM tenis
    `
    const [registros] = await conection.query(comando)
    return registros;
}