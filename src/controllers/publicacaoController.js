const publicacaoModel = require('../models/publicacaoModel');


function publicacao_noticia(req, res) {
  const imagem = req.file.filename;
  console.log(imagem)

  const {assunto,chaves ,descricao , datetime , id} = req.body

  const usuario = { assunto,chaves ,descricao , datetime ,id ,imagem }
  
  publicacaoModel.publicacao_noticia(usuario)
  .then(resultado => {
    res.status(201).send("Noticia criado com sucesso");
  }).catch(err => {
    console.error("Erro ao executar a instrução SQL:", err.stack);
    res.status(500).send(err);
  });
}

function publicacao_transferencia(req,res){
  const foto_perfil = req.files['foto_perfil'];
  const foto_atual = req.files['foto_atual'];
  const foto_futuro = req.files['foto_futuro'];

  const {posicao,name ,dtnasc, bandeira, nacionalidade, contrato, salario, valor,status, datetime, id} = req.body

  const usuario = {posicao,name ,dtnasc, bandeira, nacionalidade, contrato, salario, valor,status, datetime, id , foto_perfil,  foto_atual , foto_futuro}

  console.log(usuario)

  publicacaoModel.publicacao_transferencia(usuario)
  .then(resposta => {
    res.status(201).send("Transferencia criado com sucesso");
  }).catch(err => {
    console.log('Passei aq!' , err)
    res.status(500).send(err);
  });
}

function listar_noticias(req, res) {
  publicacaoModel.listar_noticias().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = { publicacao_noticia, publicacao_transferencia , listar_noticias}