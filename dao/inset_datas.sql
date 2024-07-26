select * from communities;

INSERT INTO communities (id, name, patron, location, email, image) 
	VALUES (0, 'sg', 'São Geraldo', 'Sapucaia', 'sg@gmail.com', '' ); 
INSERT INTO communities (id, name, patron, location, email, image) 
	VALUES (1, 'sa', 'Santo Antônio', 'Graça Aranha', 'sa@gmail.com', '' ); 
INSERT INTO communities (id, name, patron, location, email, image) 
	VALUES (2, 'sb', 'Santa Bárbara', 'Rádio', 'sb@gmail.com', '' ); 
INSERT INTO communities (id, name, patron, location, email, image) 
	VALUES (3, 'san', 'Santa Ana', 'Santana', 'san@gmail.com', '' ); 
INSERT INTO communities (id, name, patron, location, email, image) 
	VALUES (4, 'sh', 'Santo Hilário', 'Santo Hilário', 'sh@gmail.com', '' ); 


select * from users

INSERT INTO users (id, cpf, name, birthday, email, position, image, community_id)
	VALUES (0, '0', 'Ramon', '2024-12-02', 'ramon@gmail.com', 0, '', 0 );
INSERT INTO users (id, cpf, name, birthday, email, position, image, community_id)
	VALUES (1, '1', 'Josias', '2024-12-02', 'josias@gmail.com', 0, '', 0 );
INSERT INTO users (id, cpf, name, birthday, email, position, image, community_id)
	VALUES (2, '2', 'Antonio', '2024-12-02', 'antonio@gmail.com', 0, '', 0 );
INSERT INTO users (id, cpf, name, birthday, email, position, image, community_id)
	VALUES (3, '3', 'Margarete', '2024-12-02', 'margarete@gmail.com', 0, '', 0 );


select * from logins

INSERT INTO logins (id, cpf, password, position) VALUES (0, '0', '1234', '0');
INSERT INTO logins (id, cpf, password, position) VALUES (1, '1', '1234', '0');
INSERT INTO logins (id, cpf, password, position) VALUES (2, '2', '1234', '0');
INSERT INTO logins (id, cpf, password, position) VALUES (3, '3', '1234', '0');
