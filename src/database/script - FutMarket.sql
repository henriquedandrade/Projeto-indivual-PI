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

create table tb_logacesso(
	idacesso int primary key auto_increment,
    acesso datetime,
    fkusuario int,
    constraint FkAcessoUsuario foreign key (fkusuario) references tb_cadastro(idcadastro)
);

create table tb_noticias(
idnoticia int primary key auto_increment,
assunto varchar(50),
chaves varchar(50),
descricao varchar(256),
ft_noticia varchar(256),
dtPublicacao datetime,
fkAutor int,
constraint FkAutorPublica foreign key (fkAutor) references tb_cadastro(idcadastro)
);

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