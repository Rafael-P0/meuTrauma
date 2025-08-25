import { conection } from "./conection.js";

export async function listarTenis() {
    const comando = `
    SELECT * FROM tenis
    `
    const [registros] = await conection.query(comando)
    return registros;
}

export async function adicionartenis(novotenis) {
    const comando = `
    INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque)
    VALUES(?,?,?,?,?,?,?)
    `

    const [info] = await conection.query(comando,[
    novotenis.nome,
    novotenis.marca,
    novotenis.cor,
    novotenis.tamanho,
    novotenis.preco,
    novotenis.categoria,
    novotenis.estoque
    ])
    return info.insertId
}