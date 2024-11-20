const database = require("../database/config");

function total_likes() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       select (select COUNT(*) from tb_like_noticias) + (select COUNT(*) from tb_like_transferencias) as "Total_de_Likes";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function total_noticias() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       select count(idnoticia) as total_noti from tb_noticias;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function total_transferencias() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       select count(id) as total_transf from tb_transferencias;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar_noticias_e_transf() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
       select cad.username as Nome, (ifnull(count(distinct noti.idnoticia), 0) + ifnull(count(distinct transf.id), 0)) as total_publicacao
       from tb_cadastro as cad
       left join tb_noticias as noti 
       on noti.fkAutor = cad.idcadastro
       left join tb_transferencias as transf 
       on transf.fkAutor = cad.idcadastro
       group by cad.username
       order by total_publicacao desc;
       `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { total_likes,
                   total_noticias,
                   total_transferencias,
                   listar_noticias_e_transf
                }