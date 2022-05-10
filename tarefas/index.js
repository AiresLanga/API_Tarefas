const express = require('express');

const server = express();

/**Usado para reconhecer json */
server.use(express.json());

/** Adicionando as tarefas */
const tarefas = [
    {data_inicio: '11/05/2022 as 10:30', tarefa: 'programar o modulo de vendas", data_fim', data_fim: '15/05/2022 20:00'},
    {data_inicio: '15/05/2022 as 23:00', tarefa: 'Enviar o modulo para o git', data_fim: '15/05/2022 as 23:02'} 
];

// /** Retorna uma tarefa */
server.get("/tarefas/:index", (req, res) => {
    const {index} = req.params;

    return res.json(tarefas[index]);
});

/** Retorna todas tarefas */

server.get("/tarefas", (req, res) => {
    return res.json(tarefas);
});


// /** Deleta uma tarefa */

server.delete('/tarefas/:index', (rep, res) => {
    const {index} = req.params;

    cursos.splice(index, 1);
    return res.json({message: "A tarefa foi deletada!"});
});

server.listen(3000);