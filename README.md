# Teste Full Stack (.Net Core/Angular) 


## --Back End--

### É necessário instalar 3 pacotes para esse projeto:
Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer e Microsoft.EntityFrameworkCore.Tools

A pasta Model serve para guardar 3 classes para serem utilizadas:
A classe Cliente, Pedidos e Produtos, cada uma dessas classes possui propriedades dentro delas

Foi criado um banco de dados dentro do próprio Visual Studio através do Gerenciador de Servidores, clicando em Conectar-se a Banco de Dados e criando um banco novo
para armazenar essas classes com suas propriedades e seus futuros valores

Logo em seguida é criado a pasta Services com a classe ApplicationDbContext para utilizar o DbContexto
DbContext é usado para consultar de um banco de dados e agrupar alterações que serão gravadas novamente no repositório como uma unidade
Com o DbSet<> as propriedades no contexto derivado são usadas para criar um modelo por convenção.
Para isso funcionar é preciso criar dentro da classe Programa.cs um builder com a String de Conexão do banco de dados já criado

É preciso criar uma migração no projeto
O recurso de migrações no EF Core oferece uma maneira de atualizar de forma incremental o esquema de banco de dados para mantê-lo em sincronia com o modelo de dados do aplicativo, preservando os dados existentes no banco de dados.
Clique em Ferramentas > Gerenciador de Pacotes do NuGet > Console do Gerenciador de Pacotes e adicione uma migration digitando:
app-migration initial  (o initial é apenas o nome que foi utilizado, podendo alterar para o que preferir)
quando terminar a criação é necessário atualizar o banco de dados então digite:
update-database
Com isso o seu banco de dados deve conter as classes criadas dentro de Tabelas: Clientes, Pedidos, Produtos e __EFMigrationsHistory (que vem junto com a criação do migration)

Dentro da pasta Controllers está o controler de cada classe, cada uma com seu respectivo CRUD dentro delas

Rode o código e veja se aparece as classes Cliente,Pedidos e Produtos e dentro delas as funções get(mostra todos os valores contidos dentro da classe), post, get, put e delete

## --Parte do front--

### É necessário baixar o AngularCLI

Abra a pasta Pagina-Projeto (utilizei Visual Studio Code)

Dentro de Pagina-Projeto>src>app 
Foi criado a pasta Models com o modelo de classe do Clientes, Pedidos e Produtos e suas variáveis e a pasta Serviços com suas funções 
Foi criado também a pasta Páginas onde guardei cada página que irei utilizar

Para iniciar o programa clique em Terminal> New Terminal e depois digita:
ng serve -o


### Conteudo a aprimorar
Necessário ainda corrigir erros, melhorar visual e arrumar a conexão do front com o back e o banco de dados
