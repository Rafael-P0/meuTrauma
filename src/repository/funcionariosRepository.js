import { conection } from "./conection.js";

export async function listarFuncionarios() {
    const comando = `
    SELECT * FROM funcionarios
    `

    let [registros] = await conection.query(comando)
    return registros
}

export async function adicionarFuncionario(novoFuncionario) {
    const comando = `
    INSERT INTO funcionarios(Vl_salario, Nm_funcionarios, Ds_cargo, Dt_contratacao, Nm_setor)
    VALUES (?,?,?,?,?)
    `

    let [info] = await conection.query(comando, [
        novoFuncionario.Vl_salario,
        novoFuncionario.Nm_funcionrio,
        novoFuncionario.Ds_cargo,
        novoFuncionario.Dt_contatacao,
        novoFuncionario.Nm_setor
    ])
}