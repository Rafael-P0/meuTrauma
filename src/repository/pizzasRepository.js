import { conection } from "./conection.js";

export async function listarPizzas() {
    const comando = `
    SELECT * FROM pizzas
    `
    const [registros] = await conection.query(comando);
    return registros;
}


export async function adicionarPizzas(novaPizza) {
    const comando = `
    INSERT INTO pizzas(nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [
        novaPizza.nome,
        novaPizza.descricao,
        novaPizza.preco,
        novaPizza.tamanho,
        novaPizza.vegetariana,
        novaPizza.ingredientes,
        novaPizza.categoria
    ])
    return info.insertId
}

export async function alterarPizza(id, novosDados) {
    const comando = ` 
    UPDATE pizzas
    set nome = ?,
        descricao = ?,
        preco = ?,
        tamanho = ?,
        vegetariana = ?,
        ingredientes = ?,
        categoria = ?
    WHERE id = ?
    `

    const [info] = await conection.query(comando,[
        novosDados.nome,
        novosDados.descricao,
        novosDados.preco,
        novosDados.tamanho,
        novosDados.vegetariana,
        novosDados.ingredientes,
        novosDados.categoria,
        id
    ])
}

export async function removerPizza(id) {
    const comando = `
    DELETE FROM pizzas
    WHERE id = ?
    `

    const [info] = await conection.query(comando, [id]);
}