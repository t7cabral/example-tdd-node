### Instalação:

Clone repositório:

```shell
git clone https://github.com/thiago231286/example-tdd-node.git
```

Instalar dependências:

```shell
yarn install
```



### Banco de Dados:

Necessário servidor MongoDB.

Baixar e criar container docker de servidor MongoDB:

```shell
sudo docker run --name mongo-server -d -p 27017:27017 -p 28017:28017 -e MONGODB_USER="thiago" -e MONGODB_DATABASE="teste" -e MONGODB_PASS="senha123" tutum/mongodb
```

Stop container mongo-server:

```
sudo docker stop mongo-server
```

Start container mongo-server:

```
sudo docker start mongo-server
```

Arquivo de configurações de acesso ao banco  `.env`.



### Executar rotina de Testes:

Na raiz do projeto, execute:

```shell
yarn test
```



### Inicializar server:

```
yarn start
```



### Dependencias do projeto:

##### devDependencies:

| Biblioteca                                            | Descrição                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| [chai](https://yarnpkg.com/en/package/chai)           | Biblioteca de asserções BDD / TDD para node.js e o navegador. Estrutura de teste independente. |
| [mocha](https://yarnpkg.com/en/package/mocha)         | Estrutura de teste simples, flexível e divertida             |
| [mongodb](https://yarnpkg.com/en/package/mongodb)     | Driver oficial do MongoDB para Node.js                       |
| [supertest](https://yarnpkg.com/en/package/supertest) | Biblioteca orientada pelo SuperAgent para testar servidores HTTP. |

##### dependencies:

| Biblioteca                                                | Descrição                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| [body-parser](https://yarnpkg.com/en/package/body-parser) | Analise os corpos de solicitações recebidas em um middleware antes de seus manipuladores. |
| [dotenv](https://yarnpkg.com/en/package/dotenv)           | Carrega variáveis de ambiente do arquivo .env. Video no Youtube [video](https://www.youtube.com/watch?v=KOYQDxaL9ag). |
| [express](https://yarnpkg.com/en/package/express)         | Framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. |
| [mongoose](https://yarnpkg.com/en/package/mongoose)       | Ferramenta de modelagem de objeto [MongoDB](https://www.mongodb.org/) projetada para funcionar em um ambiente assíncrono. Video no [Youtube](https://www.youtube.com/watch?v=GAZdUyIV3ms). |



### BDD/TDD - Mocha e Chai

Video no Youtube de Mocha e Chai [aqui](https://www.youtube.com/watch?v=OECVoXPT9wM).

[Mocha](http://mochajs.org/) é um framework de testes com muitas funcionalidades para Javascript, que roda sobre [Node.js](http://nodejs.org/) e no navegador, tornando testes assíncronos simples. Testes do Mocha rodam em série, permitindo a criação de relatórios flexíveis e precisos. enquanto mapeiam exceções lançadas aos casos de teste corretos. Link para o [GitHub](https://github.com/mochajs/mocha).

```shell
# instalar Mocha
npm install --save-dev mocha
```



[Chai](http://chaijs.com/) é uma biblioteca BDD/TDD de assertions para [node](http://nodejs.org/) e navegadores, que pode ser combinada com qualquer framework de testes em Javascript. [Chai](http://chaijs.com/) permite que o desenvolvedor escolhar entre uma interface BDD **expect/should** e a tradicional interface TDD **assert** para realizar as mesmas tarefas.

```shell
# instalar Chai
npm install --save-dev chai
```