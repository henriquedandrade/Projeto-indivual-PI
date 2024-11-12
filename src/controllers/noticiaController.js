const noticiaModel = require('../models/noticiaModel');


function salvar(req, res) {
  const imagem = req.file.filename;

  const {assunto,chaves ,descricao , datetime , id} = req.body

  const usuario = { assunto,chaves ,descricao , datetime ,id ,imagem }
  
  noticiaModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Noticia criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function transferencia(req,res){
  const foto_perfil = req.files['foto_perfil'];
  const foto_atual = req.files['foto_atual'];
  const foto_futuro = req.files['foto_futuro'];

  const {posicao,name ,dtnasc, bandeira, nacionalidade, contrato, salario, valor,status, datetime, id} = req.body

  const usuario = {posicao,name ,dtnasc, bandeira, nacionalidade, contrato, salario, valor,status, datetime, id , foto_perfil,  foto_atual , foto_futuro}

  console.log(usuario)

  noticiaModel.transferencia(usuario)
  .then(resposta => {
    res.status(201).send("Transferencia criado com sucesso");
  }).catch(err => {
    console.log('Passei aq!' , err)
    res.status(500).send(err);
  });
}

function buscarUsuarioPeloId(req, res) {
  console.log(req.params.id);
  noticiaModel.buscarUsuarioPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send('Erro aqui 2:',err);
  });
}

module.exports = { salvar, transferencia, buscarUsuarioPeloId }