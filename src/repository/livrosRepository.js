import { conection } from './conection.js'

export async function listarLivros() {
    const comando = `
    SELECT * FROM livros;
    `

    let [registros] = await conection.query(comando);
    return registros;
}

export async function adicionarLivros(novoLivro) {
    const comando = `
    INSERT INTO livros (titulo, autor, ano_publicacao, genero, editora, preco)
    VALUES (?, ?, ?, ?, ?, ?)
    `

    let [info] = await conection.query(comando, [
        novoLivro.titulo,
        novoLivro.autor,
        novoLivro.ano_publicacao,
        novoLivro.genero,
        novoLivro.editora,
        novoLivro.preco
    ])
    return info.insertId
}