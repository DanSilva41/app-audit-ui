# Template Angular

Template de projeto frontend Angular, definido e mantido pela Seção de Padronização e Arquitetura de Software - SEPAS.

## Pré-requisitos

1 - Baixar e Instalar o [Node.js](https://nodejs.org/en/download)
- Para verificar instalação execute na linha de comando: 
```bash
node -v
```

2 - Instalar o Angular CLI (Command Line Interface): 
- execute na linha de comando: 
```bash
npm install -g @angular/cli
```
- Para verificar instalação, execute na linha de comando:
```bash
ng -v
```

3 - Instalar o Visual Studio Code (VS Code) - [Link](https://code.visualstudio.com/download)

4 - Instalar o Git - [Link](https://git-scm.com/downloads)
- Para verificar instalação, execute na linha de comando:
```bash
git --version
```

## Passo a passo

1 - No GitLab, pressione o botão [New Project](https://gitlab.stj.jus.br/projects/new)

2 - Selecione Aba "Import project"

3 - Pressione o botão "Repo by URL"

4 - No campo Git repository URL, coloque:

> https://gitlab.stj.jus.br/cdes/templates/angular.git

5 - Prencha os outros campos e pressione "Create project"

6 - Clone seu novo projeto para sua máquina
* a) Na pasta que servirá de worskpace, execute na linha de comando:
```bash
git clone https://gitlab.stj.jus.br/NOME_GRUPO/NOME_PROJETO 
```
* c) Entre na pasta criada e execute na linha de comando para instalar as dependências:
```bash
npm install
```

* d) execute na linha de comando para compilar e subir a aplicação em http://localhost:4200:
```bash
npm start
```