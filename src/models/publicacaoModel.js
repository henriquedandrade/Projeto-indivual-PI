const database = require("../database/config");

function publicacao_noticia(usuario) {
  console.log(usuario)

  const instrucao = `insert into tb_noticias (assunto, chaves, descricao, dtPublicacao ,ft_noticia, fkAutor) values ('${usuario.assunto}', '${usuario.chaves}', '${usuario.descricao}' , '${usuario.datetime}',  '${usuario.imagem}' ,${usuario.id});`;
  
  console.log(instrucao)

  console.log('Passei aq no Model!')
  
  return database.executar(instrucao);
}

function publicacao_transferencia(usuario){
  const instrucao = `insert into tb_transferencias (nome, posicao, dtNasc, nacionalidade, bandeira, tmpContrato, salario, valorMercado, statuus, ft_atleta, ft_clubeAtual, ft_clubeFuturo, horapublicacao, fkAutor) values ('${usuario.name}', '${usuario.posicao}', '${usuario.dtnasc}', '${usuario.nacionalidade}','${usuario.bandeira}', ${usuario.contrato}, ${usuario.salario}, ${usuario.valor}, '${usuario.status}', '${usuario.foto_perfil[0].filename}', '${usuario.foto_atual[0].filename}','${usuario.foto_futuro[0].filename}', '${usuario.datetime}', ${usuario.id});`;

  return database.executar(instrucao);
}

module.exports = { publicacao_noticia, publicacao_transferencia}