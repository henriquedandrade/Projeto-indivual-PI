create database futmarket;

use futmarket;

create table tb_adm(
idadm int primary key auto_increment,
codigo_adm char(8)
);

create table tb_cadastro(
	idcadastro int primary key auto_increment,
    username varchar(50),
    email varchar(256),
    senha varchar(16),
    fkcodigo int,
    constraint fkCodigoAdm foreign key (fkcodigo) references tb_adm(idadm)
);


select * from tb_cadastro;

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

select * from tb_noticias;

update tb_noticias
set fkAutor = 3
where idnoticia = 2;

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

select * from tb_transferencias;

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