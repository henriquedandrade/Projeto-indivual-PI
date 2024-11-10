const database = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into tb_noticias (assunto, chaves, descricao, dtPublicacao ,ft_noticia, fkAutor) values ('${usuario.assunto}', '${usuario.chaves}', '${usuario.descricao}' , '${usuario.datetime}',  '${usuario.imagem}' ,${usuario.id});`;
  
  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao);
}

module.exports = { salvar, buscarUsuarioPeloId }