import * as repo from './repository/pizzasRepository.js'
import * as repo2 from './repository/tenisRepository.js'
import * as repo3 from './repository/carroRepository.js'
import * as repo4 from './repository/livrosRepository.js'
import * as repo5 from './repository/animeRepository.js'
import * as repo6 from './repository/roupasRepository.js'
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

api.get('/tenis', async (req, resp) => {
    let registros = await repo2.listarTenis();
    resp.send(registros);
})

api.post('/tenis', async (req, resp) => {
    let novoTenis = await req.body;

    let id = await repo2.adicionartenis(novoTenis);
    resp.send({novoID: id})
})

api.get('/carro', async (req, resp )=> {
    let registros = await repo3.listarCarros();
    resp.send(registros)
})

api.post('/carro', async (req, resp) => {
    let novoCarro = await req.body

    let id = await repo3.adicionarCarro(novoCarro);
    resp.send({novoID: id})
}) 

api.get('/livro', async (req, resp) => {
    let registros = await repo4.listarLivros();
    resp.send(registros);
})

api.post('/livro', async (req, resp) => {
    let novoLivro = req.body

    let id = await repo4.adicionarLivros(novoLivro)
    resp.send({novoID: id})
})

api.get('/anime', async (req, resp) => {
    let registros = await repo5.listarAnimes()
    resp.send(registros)
})

api.post('/anime', async (req, resp) => {
    let novoAnime = req.body

    let id = await repo5.adicionarAnime(novoAnime)
    resp.send({novoID: id});
})

api.listen(5010, () => console.log('API subiu com sucesso!'));