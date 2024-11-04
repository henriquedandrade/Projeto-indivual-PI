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