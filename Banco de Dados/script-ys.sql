-- REGRA DE NEGÓCIO :
-- CADA USUÁRIO SÓ PODE TER 1 ESTILO CADASTRADO
-- CADA ESTILO TEM 1 OU MUITOS USUARIOS
-- Para um usuario ter uma conta ele necessáriamente precisa de um Estilo.

create database yourstyle;
use yourstyle;

create table estilo(
	idEstilo int primary key auto_increment,
	nomeEstilo varchar(45)
);

create table usuario(
	idUsuario int auto_increment,
	nome varchar(45),
	email varchar(45),
	senha varbinary(45),
	fkEstilo int,
	primary key (idUsuario, fkEstilo),
	foreign key (fkEstilo) references estilo(idEstilo)
);

insert into estilo values
(null, 'Tradicional'),
(null, 'Esportivo Casual'),
(null, 'Elegante Sofisticado'),
(null, 'Romântico');

select * from usuario join estilo on fkEstilo = idEstilo;
select * from estilo;