use [master]
go

create database dbTeste;
go

if object_id('dbTeste.dbo.tblTeste') is not null
begin
	drop table tblTeste 
end
go

create table tblTeste (
	Id	int identity primary key,
	Valor varchar(255) not null
)
go

insert into tblTeste (Valor) values ('Segunda')
insert into tblTeste (Valor) values ('Terça')
insert into tblTeste (Valor) values ('Quarta')
insert into tblTeste (Valor) values ('Quinta')
insert into tblTeste (Valor) values ('Sexta')