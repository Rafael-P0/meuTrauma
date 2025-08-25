import { conection } from "./conection.js";

export async function listarSeries() {
    const comando = `
    SELECT * FROM series
    `

    let [registros] = await conection.query(comando)
    return registros
}

export async function adicionarSerie(novaSerie) {
    const comando = `
    INSERT INTO series(titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
    VALUES(?,?,?,?,?,?)
    `

    let [info] = await conection.query(comando, [
        novaSerie.titulo,
        novaSerie.ano_lancamento,
        novaSerie.genero,
        novaSerie.temporadas,
        novaSerie.criador,
        novaSerie.avaliacao
    ])
    return info.insertId
}