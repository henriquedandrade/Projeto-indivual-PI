const noticiaModel = require('../models/noticiaModel');


function salvar(req, res) {
  const imagem = req.file.filename;

  const {assunto,chaves ,descricao , datetime , id} = req.body

  const usuario = { assunto,chaves ,descricao , datetime ,id ,imagem }
  
  noticiaModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarUsuarioPeloId(req, res) {
  console.log(req.params.id);
  noticiaModel.buscarUsuarioPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvar, buscarUsuarioPeloId }