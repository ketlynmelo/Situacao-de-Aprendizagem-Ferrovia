O que é o XAMPP
O XAMPP é um pacote que facilita a criação de um servidor web local no seu computador, incluindo FTP, banco de dados MySQL e Apache com suporte as linguagens PHP e Perl. Deixando todo o conteúdo armazenado numa rede local, onde o acesso aos arquivos é realizado instantaneamente 

Componentes principais
Apache HTTP Server → É o servidor web responsável por processar e servir páginas web, permitindo que você teste sites localmente como se estivesse em um servidor real. 
MariaDB → Um banco de dados relacional que armazena os dados das aplicações web
PHP → Linguagem de programação que executa o código do site
phpMyAdmin → interface para administrar bancos, conseguindo editar, consultar e apagar sem comandos complexos

Como instalar XAMPP
- Acesse o site oficial da xampp: https://www.apachefriends.org/download.html
- Escolha a versão compatível com seu sistema operacional
- Execute o instalador e escolha os componentes desejados (Apache, MySQL, PHP, etc.). O diretório padrão para instalação é C:\xampp no Windows. 
- Depois de instalar,abre o XAMPP Control Panel e nele você inicia o Apache e MySQL
- Para ter certeza que a instalação funcionou, abra a navegador e pesquise http://localhost
- Para criar um projeto, entre na pasta C:\xampp\htdocs e crie um arquivo com o nome de index.php 
- Depois acesse o site http://localhost/index.php 
- Para entrar no banco de dados você precisa abrir o http://localhost/phpmyadmin 

 Importância do ambiente de desenvolvimento local 
O ambiente de desenvolvimento local é importante porque permite criar, testar e corrigir aplicações web diretamente no computador, sem precisar publicar o projeto na internet. Isso facilita o manuseio do site, aumenta a velocidade dos testes e permite que erros sejam corrigidos logo no início do código. 
