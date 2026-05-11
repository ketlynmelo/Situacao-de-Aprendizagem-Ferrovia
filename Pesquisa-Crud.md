                                                                    CRUD 



    No contexto do nosso trabalho o CRUD, vai ser implementado por meio da interação entre PHP ( Vai ficar com a parte lógica do código) com o banco dados, essa junção é fundamental para aplicações dinâmicas. 

Acrônimo que significa 

Create - Responsável pela inserção de novos registros no banco de dados 

INSERT INTO sensores (nome, localizacao, tipo_dado, trem_id)
VALUES (‘Sensor A’)

Vamos utilizar no cadastro de informações, e criação de relatórios, o PHP vai receber os dados do formulário, executar um insert e salvar as informações no banco.

Read - Responsável por consultar e exibir dados no banco 

SELECT * FROM sensores; 

Faz a listagem de sensores e vai mostrar as informações no dashboard, o PHP vai fazer um select e mostrar o sensores cadastrados na tela.


Update - Alterar informações existentes no Banco

UPDATE sensores 
SET nome = ‘sensor atualizado’
WHERE id = 1;

Assim para editar sensores, atualizar status e corrigir erros, o PHP recebe novos dados, executa o update e atualiza o banco. 


Delete - Responsável por remover registros do Banco

DELETE FROM sensores 
WHERE id = 1;

Faz a exclusão de sensores, caso tenha algum dado vinculado a exclusão não acontece

De modo geral o fluxo acontece dessa forma:



Usuário interage com a interface (formulário ou botão)
PHP recebe a requisição
PHP executa um comando SQL
Banco responde
PHP retorna resultado para a tela


O CRUD em PHP é um conjunto de operações fundamentais para manipulação de dados em sistemas que utilizam banco de dados. Por meio das operações de criação, leitura, atualização e exclusão, é possível gerenciar todas as informações do sistema de forma dinâmica e eficiente.
No contexto do sistema de monitoramento ferroviário, o CRUD será essencial para o gerenciamento de sensores, trens e dados operacionais, garantindo controle, organização e suporte à tomada de decisões baseada em dados em tempo real.
