import { conection } from "./conection.js";

export async function listarFilmes() {
    const comando = `
    SELECT * FROM filmes
    `

    let [registros] = await conection.query(comando)
    return registros
}

export async function adicionarFilme(novoFilme) {
    const comando = ` 
    INSERT INTO filmes(titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
    VALUES (?,?,?,?,?,?);
    `

    let [info] = await conection.query(comando, [
        novoFilme.titulo,
        novoFilme.ano_lancamento,
        novoFilme.genero,
        novoFilme.duracao_minutos,
        novoFilme.diretor,
        novoFilme.avaliacao
    ])
    return info.insertId
}