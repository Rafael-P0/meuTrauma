import { conection } from "./conection.js";

export async function listarCarros() {
    const comando = `
    SELECT * FROM Carros;
    ` 

    const [registros] = await conection.query(comando)
    return registros;
}

export async function adicionarCarro(novoCarro) {
    const comando = `
    INSERT INTO Carros (valor, placa, modelo, ano_fabricacao, cor, ar_condicionado)
    VALUES (?,?,?,?,?,?);
    `

    const [info] = await conection.query(comando, [
        novoCarro.valor,
        novoCarro.placa,
        novoCarro.modelo,
        novoCarro.ano_fabricacao,
        novoCarro.cor,
        novoCarro.ar_condicionado
    ])
    return info.insertId
}