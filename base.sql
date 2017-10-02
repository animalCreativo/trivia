-----------------------------------------------------------------
-- borrar base de datos --
-----------------------------------------------------------------

drop table usuario;
drop table preguntas;


-----------------------------------------------------------------
-- crea base de datos --
-----------------------------------------------------------------
create table usuario (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	username     char(50),
	email        char(50),
	trivia		 BOOLEAN,	
	fecha		 datetime default CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
	);

create table preguntas (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	pregunta 			 text,
	tipo          		 integer,
	aws        			 integer,
	alt_a	 			 text,
	alt_b	 			 text,
	alt_c	 			 text,
	PRIMARY KEY (id)
);

insert into usuario (username , email , trivia) 
values('pancho', 'francisco.barriosr@gmail.com', true);

insert into usuario (username , email, trivia ) 
values('vicente', 'barriosr@gmail.com', false);

insert into usuario (username , email,fecha ) 
values('gato1', 'wato@gmail.com',STR_TO_DATE('09/15/2017 8:06:26 AM', '%c/%e/%Y %r'));

insert into usuario (username , email,fecha ) 
values('gato2', 'wato@gmail.com',STR_TO_DATE('09/14/2017 8:06:26 AM', '%c/%e/%Y %r'));

insert into usuario (username , email,fecha ) 
values('gato4', 'wato@gmail.com',STR_TO_DATE('09/13/2017 4:06:26 AM', '%c/%e/%Y %r'));

insert into usuario (username , email,fecha ) 
values('gato5', 'wato@gmail.com',STR_TO_DATE('09/15/2017 9:06:26 AM', '%c/%e/%Y %r'));


insert into usuario (username , email,fecha ) 
values('gato8', 'wato@gmail.com',STR_TO_DATE('09/15/2017 7:06:26 AM', '%c/%e/%Y %r'));



insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Cuál de estos ingredientes es de origen mapuche?',
		'1',
		'1',
		'Merkén',
		'Pimienta',
		'Ajo');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Cuántos tipos de papas hay en Chile?',
		'1',
		'2',
		'105',
		'211',
		'300');
insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('Hay que añadir una pizca de azúcar a las claras antes de batirlas a punto nieve.',
		'3',
		'2',
		'Verdadero',
		'Falso',
		'NULL');	
		
insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Cuál de estos es un “faux pas” en la cocina italiana?',
		'2',
		'1',
		'dejar la pasta como pulpa.',
		'poner crema en una salsa carbonara.',
		'partir el spaghetti por la mitad para que quepa en la olla).');	

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué ingrediente no corta la leche?',
		'1',
		'3',
		'jugo de limón.',
		'vinagre.',
		'bicarbonato.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Cuáles son los ingredientes especiales de una salsa bechamel?',
		'2',
		'3',
		'leche, huevo, harina.',
		'huevos, mantequilla.',
		'leche, mantequilla y harina.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('Luego de que el agua hierve ¿Cuál es el tiempo ideal para lograr un huevo duro?',
		'2',
		'2',
		'entre 5 y 7 min.',
		'entre 10 y 12 min.',
		'entre 6 y 9 min.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué es un fondo?',
		'2',
		'2',
		'agua con aceite y sal para cocinar cualquier cosa.',
		'un caldo que se prepara como primer paso en una preparación.',
		'una sopa italiana que se sirve antes de la cena.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Cuál es el país de origen de la mayonesa?',
		'1',
		'3',
		'Italia.',
		'España.',
		'Francia.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué es una emulsión?',
		'2',
		'2',
		'Transformación de comida sólida a líquida.',
		'La mezcla de dos líquidos que normalmente no se juntarían.',
		'El resultado de presionar la comida en un plato.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Para qué se utiliza el corte en bastones?',
		'2',
		'2',
		'Para guarniciones.',
		'Para frituras y salteados.',
		'Para puré.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué significa “tamizar” algo?',
		'2',
		'3',
		'Pasar los ingredientes por harina para que tengan mayor consistencia.',
		'Mezclar el harina con agua y vinagre para mejorar el sabor de los alimentos.',
		'Pasarlo por un colador para volverlo más fino y quitarle impureza.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('En la cocina, ¿A qué se refiere el termino reducir?',
		'2',
		'2',
		'A la disminución del volumen de un preparado sólido por líquido.',
		'A la disminución del volumen de un preparado líquido por evaporación.',
		'A la disminución del volumen de un preparado líquido por sólido.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué es macerar los alimentos?',
		'2',
		'2',
		'Introducir cualquier carne en algún líquido para que se ablanden y adquieran aroma.',
		'Remojar varios alimentos en vino o licores para que adquieran sabor.',
		'Introducir un alimento crudo en vinagre, sal, orégano, ajo y/o pimiento.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('Para hacer un pastel, deben enharinarse las frutas confitadas para que no se vayan al fondo.',
		'3',
		'2',
		'Verdadero',
		'Falso',
		'NULL');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('Para que un Soufflé salga a la perfección, hay que abrir la puerta del horno para comprobar que esté subiendo.',
		'3',
		'2',
		'Verdadero',
		'Falso',
		'NULL');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué fruto seco sale de las uva?',
		'2',
		'3',
		'Almendras.',
		'Dtiles.',
		'Pasas.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿En qué continente tiene origen el arroz?',
		'2',
		'1',
		'Asia.',
		'Europa.',
		'América.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué denota la palabra francesa “baguette” ?',
		'2',
		'2',
		'Un cubierto.',
		'Un pan.',
		'Tipo de vino.');

insert into preguntas (pregunta , tipo, aws, alt_a, alt_b, alt_c) 
values('¿Qué es un “aguacate”?',
		'2',
		'3',
		'Camote.',
		'Abobora.',
		'Palta.');																																																					
								
SELECT * FROM `usuario` WHERE  `fecha` >= CURDATE()  ORDER BY RAND() LIMIT 1

SELECT * FROM `preguntas` WHERE `tipo`= 1 ORDER BY  RAND() LIMIT 1

