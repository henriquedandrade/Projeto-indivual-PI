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

function qtd_publicacoes_noticias(){
    var instrucaoSql = `
    SELECT DATE(horapublicacao) AS dia, COUNT(*) AS total_publicacoes FROM tb_transferencias
    GROUP BY dia
    ORDER BY dia desc
    LIMIT 7;
    `;
    return database.executar(instrucaoSql);
}

function qtd_publicacoes_transferencias(){
    var instrucaoSql = `
    SELECT DATE(dtPublicacao) AS dia, COUNT(*) AS total_publicacoes FROM tb_noticias
    GROUP BY dia
    ORDER BY dia desc
    LIMIT 7;
    `;
    return database.executar(instrucaoSql);
}

function grafico_bar(){
    var instrucaoSql = `
   SELECT 'Notícia' AS tipo,
    n.idnoticia AS id_publicacao,
    n.assunto AS titulo,
    COUNT(ln.fkPostNoti) AS qtd_curtidas
    FROM tb_noticias n
    LEFT JOIN tb_like_noticias ln ON n.idnoticia = ln.fkPostNoti
    GROUP BY n.idnoticia, n.assunto
    UNION ALL SELECT 'Transferência' AS tipo,
    t.id AS id_publicacao,
    t.nome AS titulo,
    COUNT(lt.fkPostTransf) AS qtd_curtidas
    FROM tb_transferencias t
    LEFT JOIN tb_like_transferencias lt ON t.id = lt.fkPostTransf
    GROUP BY t.id, t.nome
    ORDER BY qtd_curtidas DESC
    LIMIT 5;
    `;

    return database.executar(instrucaoSql);
}


module.exports = { total_likes,
                   total_noticias,
                   total_transferencias,
                   listar_noticias_e_transf,
                   qtd_publicacoes_noticias,
                   qtd_publicacoes_transferencias,
                   grafico_bar
                }