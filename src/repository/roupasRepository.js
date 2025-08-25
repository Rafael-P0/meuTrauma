import { conection } from './conection.js'

export async function listarRoupas() {
    const comando = `
    SELECT * FROM roupas;
    `

    let [registros] = await conection.query(comando);
    return registros;
}

export async function adicionarRoupa(novaRoupa) {
    const comando = `
    INSERT INTO roupas (marca, tipo, cor, preco, tem_estq, tamanho)
    VALUES (?, ?, ?, ?, ?, ?);
    `

    let [info] = await conection.query(comando, [
        novaRoupa.marca,
        novaRoupa.tipo,
        novaRoupa.cor,
        novaRoupa.preco,
        novaRoupa.tem_estq,
        novaRoupa.tamanho
    ])
    return info.insertId
}