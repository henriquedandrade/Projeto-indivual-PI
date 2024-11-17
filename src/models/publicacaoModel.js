const database = require("../database/config");

function publicacao_noticia(usuario) {
  console.log(usuario)

  const instrucao = `insert into tb_noticias (assunto, chaves, descricao, dtPublicacao ,ft_noticia, fkAutor) values ('${usuario.assunto}', '${usuario.chaves}', '${usuario.descricao}' , '${usuario.datetime}',  '${usuario.imagem}' ,${usuario.id});`;

  console.log(instrucao)

  console.log('Passei aq no Model!')
  
  return database.executar(instrucao);
}

function publicacao_transferencia(usuario){
  const instrucao = `insert into tb_transferencias (nome, posicao, dtNasc, nacionalidade, tmpContrato, salario, valorMercado, statuus, ft_atleta, ft_clubeAtual, ft_clubeFuturo, horapublicacao, fkAutor) values ('${usuario.name}', '${usuario.posicao}', '${usuario.dtnasc}', '${usuario.nacionalidade}', ${usuario.contrato}, ${usuario.salario}, ${usuario.valor}, '${usuario.status}', '${usuario.foto_perfil[0].filename}', '${usuario.foto_atual[0].filename}','${usuario.foto_futuro[0].filename}', '${usuario.datetime}', ${usuario.id});`;

  return database.executar(instrucao);
}

function listar_noticias() {
  console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucaoSql = `
      SELECT 
          a.idnoticia,
          a.assunto,
          a.chaves,
          a.descricao,
          a.ft_noticia,
          a.dtPublicacao,
          u.username          
      FROM tb_noticias as a
          INNER JOIN tb_cadastro as u
              ON a.fkAutor = u.idcadastro;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar_trasnferencias_recentes() {
  console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucaoSql = `
      SELECT 
          a.id,
          a.nome,
          a.posicao,
          a.dtNasc,
          a.nacionalidade,
          a.tmpContrato,
          a.salario,
          a.valorMercado,
          a.statuus,
          a.ft_atleta,
          a.ft_clubeAtual,
          a.ft_clubeFuturo,
          a.horapublicacao,
          u.username          
      FROM tb_transferencias as a
          INNER JOIN tb_cadastro as u
              ON a.fkAutor = u.idcadastro;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contabilizar_like(id) {
  console.log("ACESSEI O AVISO MODEL");

  var instrucaoSql = `
    select fkPostTransf, count(fkUser) as total_likes
    from tb_like_transferencias
    where fkPostTransf = ${id}
    group by fkPostTransf;
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function consultar_like_transferencias(idPost, id) {
  console.log("ACESSEI O AVISO MODEL");

  var instrucaoSql = `
      select fkUser, fkPostTransf from tb_like_transferencias
      join tb_cadastro on fkUser = idcadastro 
      join tb_transferencias on fkPostTransf = id
      where fkUser = ${id} and fkPostTransf = ${idPost};
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function like_transferencias(idPost, id){
  console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

  var instrucaoSql = `
     insert into tb_like_transferencias values (${id}, ${idPost}) ;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
}

function unlike_transferencias(idPost, id){
  console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

  var instrucaoSql = `
     delete from tb_like_transferencias where fkUser = ${id} AND fkPostTransf = ${idPost};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql)
}

module.exports = { publicacao_noticia, 
                   publicacao_transferencia, 
                   listar_noticias, 
                   listar_trasnferencias_recentes,
                   contabilizar_like,
                   consultar_like_transferencias,
                   like_transferencias,
                   unlike_transferencias
                  }
                   