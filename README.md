# Desafio Técnico QA - Cypress + Cucumber

## Objetivo

Este projeto foi desenvolvido como parte de um desafio técnico para demonstrar conhecimentos em automação de testes Web e API utilizando Cypress, JavaScript e Cucumber (BDD).

---

## Tecnologias utilizadas

- JavaScript
- Cypress
- Cucumber
- Node.js

---

## Estrutura do projeto

```
cypress
├── e2e
│   ├── api
│   │   ├── trello.cy.js
│   │   └── trello.feature
│   └── web
│       ├── compra.cy.js
│       └── compra.feature
├── fixtures
├── pages
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── ProductPage.js
└── support
```

---

## Instalação

Clone o projeto:

```bash
git clone https://github.com/jorgemobil/desafio-tecnico-qa-cypress.git
```

Instale as dependências:

```bash
npm install
```

---

## Configuração

Crie um arquivo chamado:

```
cypress.env.json
```

Utilize o arquivo `cypress.env.example.json` como modelo:

```json
{
  "email": "seu-email",
  "password": "sua-senha"
}
```

---

## Executando os testes

Modo interativo:

```bash
npm run cy:open
```

Modo headless:

```bash
npm run cy:run
```

---

## Cenários automatizados

### Web

- Login com usuário válido
- Busca de produtos
- Inclusão de produto no carrinho
- Validação do produto na tela de pagamento

### API

- Requisição GET para API do Trello
- Validação do Status Code 200
- Validação do campo `data.list.name`

---

## Autor

Jorge Antonio Souza Santos