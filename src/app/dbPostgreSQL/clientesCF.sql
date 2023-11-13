CREATE DATABASE clietesCF;
CREATE USER gabriel_cordeiro WITH PASSWORD 'gazu';
ALTER ROLE gabriel_cordeiro SET client_encoding TO 'utf8';
ALTER ROLE gabriel_cordeiro SET default_transaction_isolation TO 'read committed';
ALTER ROLE gabriel_cordeiro SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE clientesCF TO gabriel_cordeiro;

DROP TABLE clientes

CREATE TABLE clientes (
  id	VARCHAR(10) PRIMARY KEY,
  nomeComp	VARCHAR(80),
  nomeResumido	VARCHAR(40),
  cpf	VARCHAR(11),
  telefone	VARCHAR(11),
  celular	VARCHAR(11),
  email	VARCHAR(80),
  situacao	boolean,
  nascimento	VARCHAR(8),
  cep	VARCHAR(8),
  endereco	VARCHAR(60),
  numero	VARCHAR(10),
  complemento	VARCHAR(80),
  cidade	VARCHAR(60),
  bairro	VARCHAR(60),
  estado	VARCHAR(60),
  rg	VARCHAR(10),
  observacoes	VARCHAR(80),
  selecionado	boolean
);


INSERT INTO clientes VALUES (
'6',
'Bruno Petito',
'Bruno',
'96542653927',
'21994823615',
'21994823615',
'bruno.petito@hotmail.com',
true,
'21071997',
'91030060',
'Rua Catarina Martins',
'1',
'Casa ao lado da Escola',
'São Gonçalo',
'Porto Velho',
'Rio de Janeiro',
'6235987',
'Cliente fraco',
false
)

SELECT * FROM clientes

-- bom selecionar pegando por algum parametro como ordem do id ou do nomecomp pois a tabela vai ser editada.
SELECT * FROM clientes
    ORDER BY id;
	
SELECT * FROM clientes
    WHERE nomeResumido = 'Daniel';
	
SELECT * FROM clientes
    WHERE id > '2';
	
SELECT * FROM clientes 
	WHERE nomeResumido IN ('Gabriel', 'Bruno');

SELECT id, nomeComp, situacao FROM clientes 
	WHERE situacao = true;
	
UPDATE clientes
    SET nomeResumido = 'Gabriel',  nomeComp = 'Gabriel Teste'
    WHERE id = '3';

DELETE FROM clientes WHERE id > '5'; 