# Projeto

## inciar projeto
- `npm init` dentro da pasta do projeto
- instale o banco de dados MySQL

## instalar dependências
- dentro do projeto instale as dependencias:
  - `npm i express` para viver o servidor
  - `npm i body-parser` para traduzir umas coisas
  - `npm i mysql2` para conversar com o banco
  - `npm i --save-dev nodemon` pra não matar o servidor toda hora, ele vai reiniciar o servidor a cada mudança
  - `npm i sequelize sequelize-cli path` instala o sequelize e a linha de comando dele, e uma biblioteca para identificar caminhos

## usando nodemon
- para o nodemon funcionar temos que colocar no package.json dentro dos scripts: `"start": "nodemon ./api/index.js"`
- para rodar o projeto  `npm run start`

## criando o banco de dados
- abra seu prompt de comando e rode `mysql`
  - verifique se tem uma variavel de ambiente para o mysql
  - se der o erro `ERROR 2003 (HY000): Can't connect to MySQL server` vá no `Serviços` ache o MySQL e ative ele.
    - reinicie o prompt de comando
  - senão rode `mysql -u root -p` e ai ele vai te pedir a senha
- para ver as bases de dados que você tem  `show databases;`
- criando o banco de dados: `create database aluraflix`
- modifique no `api/config/config.json` o arquivo json com as informações necessárias no `"development:{}"`

## usar o sequelize pela primeira vez
- crie um projeto vazio do sequelize pelo `npx sequelize-cli init` ele vai criar alguns diretorios importantes
  - se vc criou esse projeto na raiz do projeto leve todas as coisas que ele criou (config, migrations, models e seeders) para dentro da pasta `api/`
  -  e agora a gente avisa os caminhos para o sequelize pelo arquivo `.sequelizerc`

## para criar um modelo e uma migration com sequelize
- tabela de tipos de dados e suas equivalencias: https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
- `npx sequelize-cli model:create --name nome_da_tabela --attributes campo:tipo,campo:tipo,...` 


## migração
- migração de dados: transferência de dados entre plataformas
- migração com ORM: alterações incrementais e rastreáveis no banco
- mudanças no esquema: coordernar alterções feitas por diferentes pessoas do time nas tabelas do banco
- rastrear (e reverter) alterações feitas no banco para debugar conflitos e erros

## rodando migrações
- `npx sequelize-cli db:migrate`
- para ver no bd
  - `use nome_da_base_de_dados`
  - `describe nome_da_tabela`

## cuidados
- o sequelize pluraliza os nomes da tabela, fique de olho e compare
- se prefirir coloque ao criar um modelo o nome ja no plural

## seed 
- para alimentar o banco: `npx sequelize-cli seed:generate --name demo-pessoa`
- rodar o seed `npx sequelize-cli db:seed:all`

## desfazer coisas
- migração
  - `npx sequelize-cli db:migrate:undo` Este comando vai desfazer somente a última migração feita, na ordem em que os arquivos são lidos e executados pelo Sequelize.
  - `db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js` Para desfazer uma migração específica. só irá funcionar se não tiver nenhuma outra tabela relacionada a ela!
- seeds 
  - `npx sequelize db:seed:undo` desfazer o último seed feito
  - `npx sequelize-cli db:seed:undo --seed nome-do-arquivo` desfazer seeds de uma tabela específica 
  - `npx sequelize-cli db:seed:undo:all` desfazer todos os seeds feitos


## MVC
- Model - regras de negócios
- View 
- Controller - faz meio de campo entre modelo e o restante da aplicação


## Criando controlador e uma rota
- Crie uma pasta controllers
  - dentro da pasta vamos criar o controller (onde vamos fazer as funções de CRUD) de cada tabela (ex: pegar todos as pessoas, só uma pessoa)

- rotas
  - criamos uma pasta routes para organizar as nossas rotas
  - no `index.js` avisamos as rotas que nós temos
  - nos outros arquivos criamos as rotas que queremos

# Curso 2 - ORM Node.js avançando com Sequelize

## Novas funcionalidades

 
- O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados. ok

- Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos. pk

- Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front. ok

- É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida. ok

- O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas). ok

- O cliente quer poder consultar as matrículas por turma  ok
- e saber quais delas estão lotadas, para organizar melhor as matrículas.

- O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.

