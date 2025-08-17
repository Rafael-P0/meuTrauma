import * as repo from './repository/pizzasRepository.js'
import express from 'express'
const api = express();
api.use(express.json()); // permite o uso de BODY

api.get('/pizzas', async (req, resp) => {
    let registros = await repo.listarPizzas();
    resp.send(registros);
})

api.post('/pizzas', async (req, resp) => {
    let novaPizza = req.body;

    let id = await repo.adicionarPizzas(novaPizza);
    resp.send({novoID: id})
})

api.put('/pizzas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;

    await repo.alterarPizza(id, novosDados);
    resp.send()
})

api.delete('/pizzas/:id', async (req, resp) => {
    let id = Number(req.params.id);

    await repo.removerPizza(id);
    resp.send()
})

api.listen(5010, () => console.log('API subiu com sucesso!'));