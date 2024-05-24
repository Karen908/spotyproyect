use proyectmusic;
explain	usuarioadmin;
Select * from usuarioadmin;
create table musica(
idmusic int primary key auto_increment not null,
artista varchar(20) not null,
nom_music varchar(20) not null,
descripcion varchar(200) not null,
urlCancion varchar(100) not null
);