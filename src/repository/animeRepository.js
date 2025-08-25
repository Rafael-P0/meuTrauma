import { conection } from "./conection.js";

export async function listarAnimes() {
    const comando = `
    SELECT * FROM animes
    `

    let [registros] = await conection.query(comando)
    return registros
}

export async function adicionarAnime(novoAnime) {
    const comando = `
    INSERT INTO animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao)
    VALUES (?, ?, ?, ?, ?, ?)
    `

    let [info] = await conection.query(comando, [
        novoAnime.nome,
        novoAnime.genero,
        novoAnime.episodios,
        novoAnime.ano_lancamento,
        novoAnime.estudio,
        novoAnime.avaliacao
    ])
    return info.insertId
}