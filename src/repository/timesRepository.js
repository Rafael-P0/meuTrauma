import { conection } from "./conection.js";

export async function listarTimes() {
    const comando = `
    SELECT * FROM times_futebol
    `

    let [registros] = await conection.query(comando)
    return registros
}


export async function adicionarTime(novoTime) {
    const comando = `
    INSERT INTO times_futebol (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga)
    VALUES (?,?,?,?,?,?,?,?,?)
    `

    let [info] = await conection.query(comando, [
        novoTime.nome,
        novoTime.cidade,
        novoTime.estado,
        novoTime.pais,
        novoTime.ano_fabricacao,
        novoTime.estadio,
        novoTime.capacidade_estadio,
        novoTime.tecnico,
        novoTime.liga
    ]);
    return info.insertId
}