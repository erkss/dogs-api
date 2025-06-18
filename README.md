# API de Informações sobre Raças de Cães

Este projeto é uma API desenvolvida utilizando **TypeScript** e **Node.js**, com o objetivo de fornecer informações sobre raças de cães de maneira simples e eficiente. A API consome dados de uma API externa e expõe endpoints que permitem consultar detalhes sobre raças específicas, oferecendo uma solução modular, escalável e adequada para integrar com aplicações maiores, como sistemas de gerenciamento de animais, catálogos ou serviços de adoção.

O projeto foca na implementação de boas práticas de desenvolvimento, incluindo a separação clara de responsabilidades, uso de tipagem estática para maior confiabilidade e facilidade de manutenção.

## Objetivos do Projeto

- **Consumo de APIs Externas**: Realizar chamadas a um serviço externo para obter dados atualizados e confiáveis sobre raças de cães.
- **Modularidade**: Estruturar o código de forma que cada componente (Model, Service, Router) tenha responsabilidades bem definidas.
- **Eficiência**: Garantir respostas rápidas e tratamento adequado de erros, tanto para requisições válidas quanto inválidas.
- **Escalabilidade**: Projetar uma base sólida que permita a adição de novas funcionalidades com facilidade.

---

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza um conjunto moderno de tecnologias e ferramentas, incluindo:

- **Node.js**: Plataforma de execução para construir aplicações web rápidas e escaláveis.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, reduzindo erros e facilitando o desenvolvimento.
- **Express**: Framework minimalista para a construção de APIs rápidas e organizadas.
- **TS-Node-Dev**: Ferramenta para executar código TypeScript com recarregamento automático durante o desenvolvimento.
- **Morgan**: Middleware de log para monitoramento e depuração de requisições HTTP.
- **Cors**: Middleware para configurar políticas de segurança e compartilhamento de recursos entre origens diferentes (CORS).

---

## Estrutura do Projeto

O projeto é estruturado em camadas bem definidas para facilitar a organização e a manutenção:

- **Model**: Contém a representação lógica dos dados manipulados pela API. No caso deste projeto, representa a entidade "Dog" e suas interações.
- **Service**: Responsável por toda a lógica de negócios e pela comunicação com APIs externas. Garante que os dados sejam processados e entregues no formato necessário para o consumo.
- **Router**: Define as rotas e endpoints disponíveis para os clientes da API.
- **Controller**: Pode ser utilizado para concentrar a lógica de manipulação de requisições e respostas, mantendo o código das rotas limpo e reutilizável.

---

## Como Instalar o Projeto
### 1. Instale as Dependências

Abra o terminal no diretório do projeto e execute o seguinte comando para instalar as dependências:

```
npm install
```

### 2. Rode o projeto

```
npm run start:dev
```

---

## 🔗 Link da API Externa

Este projeto consome dados da seguinte API externa para obter informações sobre raças de cães:

-  [DogApi](https://dogapi.dog/api/v2/breeds)
