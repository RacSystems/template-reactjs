<h2 align="center">
  {{NOME DO PROEJTO}
</h2>

<h4 align="center">
  Repositório contendo a aplicação {{NOME DO PROJETO}}.
</h4>

<br>

## Requisitos

- <img src=".github/resources/nodejs.png" /> **[NodeJS](https://nodejs.org/en/) > 14.16.**
- <img src=".github/resources/yarn.png" /> **[Yarn](https://classic.yarnpkg.com/lang/en/) v1.22.x**
- <img src=".github/resources/docker.png" /> **[Docker](https://www.docker.com/)**
- <img src=".github/resources/docker.png" /> **[Docker Compose](https://docs.docker.com/compose/)**

<br>

## Preparando ambiente de desenvolvimento

### **Clonando o repositório**
Para iniciar o projeto em ambiente de desenvolvimento você deve começar clonando o esse repositório, entrando na branch de desenvolvimento e instalando todas as dependências:

```shell
git clone {{LINK DO GITHUB}
cd {{NOME DA PASTA}}
git checkout --track origin/develop
yarn prepare
```

### **Subindo a aplicação**
O repositório há duas formas para iniciar o servidor, usando o React Scripts (Tradicional) e usando o Docker (Caso você não tenha nada configurado de ambiente de trabalho).

#### **1. React Scripts - Método tradicional**
Junto do Create React App vem o pacote de scripts (React Scripts) que disponibilizam para dar start, build e eject no servidor. Tendo isso, basta rodar o comando start que o mesmo se encarrega de um um servidor Webpack e abrir o navegador para você.

```shell
yarn start
```
#### **2. Docker**
Também foi configurado um Dockerfile e um Docker Compose no projeto, caso haja necessidade de iniciar o servidor webpack em um computador não convencional de trabalho, onde não terá o ambiente de desenvolvimento completamente instalado, basta usar esse método que verá terá o mesmo resultado que o usando o React Scripts (talvez um pouco a mais de delay na ora de iniciar/alterar arquivos do repositório).

```shell
yarn container
```
_OBS: É necessário ter pelo menos o docker instalado no computador para esse método funcionar perfeitamente._
