# Central de Triagem

## Descrição

Essa aplicação auxiliará os servidores da Central de Triagem de Belo Horizonte para que possam gerenciar as certidões emitidas para o sistema PJe (Processo Judicial Eletrônico).

## Informações da plataforma

 - **Ambiente:** Aplicação web

### Tipos de Usuários

1. Coordenador
2. Triador
3. Consultor

## Principais funcionalidades
 
 - Autenticação e autorização
 - Gerar certidões em PDF
 - Consulta de certidões geradas
 - Gerar relatórios

## Requisitos funcionais

**Autenticação e autorização:**

1. O usuário "Coordenador" pode visualizar e gerar relatórios gerenciais, bem como cadastrar usuários para os perfis de "Triador" e "Consultor".
2. O usuário "Triador" e "Coordenador" podem gerar, consultar, fazer download e excluir uma  certidão.
3. O usuario "Consultor" pode pesquisar e fazer o download de certidões geradas.

**Gerar certidões em PDF**

1. Só poderá existir uma certidão por processo.
2. Uma certidão somente poderá ser gerada se não houver alguma outra anterior vinculada.
3. A certidão deverá conter os seguintes dados:
   - **Cabeçalho:** Logo do TJMG, Número do processo, Órgão Julgador, Parte autora e Parte ré.
   - **Corpo:** Itens de lista padronizada verificados pelo triador, campo livre para observações com o limite de 200 caracteres.
   - **Rodapé:** Loca e data, assim como a matrícula do usuário responsável pela geração da certidão.

**Consulta de certidões geradas**

1. Mostrar protocolo do documento, número do processo vinculado, data e hora de criação do documento e matrícula do responsável nos detalhes da certidão apresentada na consulta.
2. Deve mostrar registro de certidões anteriores que foram canceladas, bem como a data de cancelamento e matrícula do responsável pelo cancelamento nos detalhes.
3. Poderá ser feito o download da certidão ou apenas a sua visualização.
4. A certidão cancelada não pode ficar disponível para download e visualização.

**Gerar relatórios**

1. Apresentar dashboards desenvolvidos em Power BI.
2. Possibilidade de realizar filtros nos painéis.
3. Downloads de relatórios personalizados em PDF.

 ## Tecnologias utilizadas no desenvolvimento do frontend

1. **Linguagens:**
   - HTML, CSS e Typescript

2. **Ambiente de Desenvolvimento:**
   - NodeJS e NPM para instalação de pacotes.

3. **Framework e Bibliotecas:**
   - Vite: Ferramenta para construção de projetos frontend.
   - ReactJS: Biblioteca JavaScript para interfaces.   

4. **Estilização:**
   - Styled-components: Para estilização.
   - Material UI: Biblioteca de componentes.

5. **Roteamento:**
   - React-router-dom: Sistema de roteamento para uma navegação eficiente.

6. **Requisições HTTP:**
   - Axios: Biblioteca para realizar requisições HTTP.

8. **Validação de Formulários:**
   - Yup: Biblioteca para validação de formulários.

## Guia para executar o projeto localmente

1. **Configurar Ambiente Local:**
   Certifique-se de ter o Node.js e o npm instalados em seu ambiente. Caso não tenha, você pode baixá-los [aqui](https://nodejs.org/).

2. **Clonar o Projeto:**
   Clone este repositório para o diretório desejado em sua máquina.

    ```bash
    git clone https://github.com/moisesuailab/central-triagem.git
    ```

3. **Instalar Dependências:**
   No prompt de comando, navegue até o diretório do projeto e execute o seguinte comando para baixar as dependências necessárias (pasta `node_modules`).

    ```bash
    npm install
    ```

4. **Executar em Ambiente de Desenvolvimento:**
   Utilize o seguinte comando para iniciar o projeto em modo de desenvolvimento:

    ```bash
    npm run dev
    ```

5. **Acessar no Navegador:**
   Abra o navegador da web e digite o link indicado no terminal. Geralmente, o endereço é [http://localhost:5173](http://localhost:5173).
