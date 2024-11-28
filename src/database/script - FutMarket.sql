create database futmarket;

use futmarket;

create table tb_adm(
idcodigo int primary key auto_increment,
codigo_adm char(8)
);

insert into tb_adm values
( 1 , 'XPTO1234');

create table tb_cadastro(
	idcadastro int primary key auto_increment,
    username varchar(50),
    email varchar(256),
    senha varchar(16),
    fkcodigo int,
    constraint fkCodigoAdm foreign key (fkcodigo) references tb_adm(idadm)
);

create table tb_logacesso(
	idacesso int primary key auto_increment,
    acesso datetime,
    fkusuario int,
    constraint FkAcessoUsuario foreign key (fkusuario) references tb_cadastro(idcadastro)
);

create table tb_noticias(
idnoticia int primary key auto_increment,
assunto varchar(150),
chaves varchar(50),
descricao text,
ft_noticia varchar(256),
dtPublicacao datetime,
fkAutor int,
constraint FkAutorPublica foreign key (fkAutor) references tb_cadastro(idcadastro)
);


create table tb_transferencias(
id int primary key auto_increment,
nome varchar(50), 
posicao varchar(50), 
dtNasc date,
nacionalidade  varchar(50),
tmpContrato int,
salario int, 
valorMercado int, 
statuus varchar(50), 
ft_atleta varchar(256),  
ft_clubeAtual varchar(256), 
ft_clubeFuturo varchar(256),  
horapublicacao datetime,
fkAutor int,
constraint fkAutorTransfere foreign key (fkAutor) references tb_cadastro(idcadastro)
);

select cad.username as Nome, (ifnull(count(distinct noti.idnoticia), 0) + ifnull(count(distinct transf.id), 0)) as total_publicacao
from tb_cadastro as cad
left join tb_noticias as noti 
on noti.fkAutor = cad.idcadastro
left join tb_transferencias as transf 
on transf.fkAutor = cad.idcadastro
group by cad.username
order by total_publicacao desc;

create table tb_like_noticias(
fkUser int,
fkPostNoti int,
constraint pkCompostaNoticias primary key( fkUser, fkPostNoti),
constraint fkUserCurti1 foreign key (fkUser) references tb_cadastro(idcadastro),
constraint fkPostCurtido1 foreign key (fkPostNoti) references tb_noticias(idnoticia)
);

create table tb_like_transferencias(
fkUser int,
fkPostTransf int,
constraint pkCompostaTransferencias primary key( fkUser, fkPostTransf),
constraint fkUserCurti2 foreign key (fkUser) references tb_cadastro(idcadastro),
constraint fkPostCurtido2 foreign key (fkPostTransf) references tb_transferencias(id)
);

select (select COUNT(*) from tb_like_noticias) + (select COUNT(*) from tb_like_transferencias) as "Total de Likes";

SELECT DATE(horapublicacao) AS Dia, COUNT(*) AS total_publicacoes FROM tb_transferencias
GROUP BY dia
ORDER BY dia;

SELECT DATE(dtPublicacao) AS Dia, COUNT(*) AS total_publicacoes FROM tb_noticias
GROUP BY dia
ORDER BY dia;

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
ORDER BY qtd_curtidas DESC;



select count(fkPostTransf) as Usuario from tb_like_transferencias;

SELECT fkPostTransf, COUNT(fkUser) AS total_likes
FROM tb_like_transferencias
where fkPostTransf = 2
GROUP BY fkPostTransf;

SELECT fkPostTransf as "Card Curtidos"
FROM tb_like_transferencias
where fkUser = 1;

select idcadastro, id from tb_like_transferencias
join tb_cadastro on fkUser = idcadastro 
join tb_transferencias on fkPostTransf = id;

SELECT tb_noticias.assunto AS "Assunto", 
       tb_noticias.chaves AS "Palavras-Chave", 
       tb_noticias.descricao AS "Descrição", 
       tb_noticias.dtPublicacao AS "Data da Publicação", 
       tb_cadastro.username AS "Autor da notícia"
FROM tb_noticias
JOIN tb_cadastro ON tb_noticias.fkAutor = tb_cadastro.idcadastro;

SELECT concat(tb_cadastro.username , " logou as ", tb_logacesso.acesso ) as Acessos 
FROM tb_logacesso
JOIN tb_cadastro
ON fkusuario = idcadastro;