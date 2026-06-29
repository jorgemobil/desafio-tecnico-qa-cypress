import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

Given("que acesso o site Automation Exercise", () => {
  cy.visit("/");
  cy.contains("Home").should("be.visible");
});

When("realizo login com um usuario valido", () => {
  LoginPage.acessarLogin();
  LoginPage.preencherEmail(Cypress.env("email"));
  LoginPage.preencherSenha(Cypress.env("password"));
  LoginPage.clicarLogin();
});

Then("devo visualizar o usuario logado", () => {
  LoginPage.validarLogin();
});

When("busco pelo produto {string}", (produto) => {

    ProductPage.acessarProdutos();
    ProductPage.pesquisarProduto(produto);

});

Then("devo visualizar os produtos encontrados", () => {

    ProductPage.validarBusca();

});

When("adiciono o primeiro produto ao carrinho", () => {

    ProductPage.adicionarPrimeiroProdutoAoCarrinho();
    ProductPage.acessarCarrinho();

});

Then("devo visualizar o carrinho de compras", () => {

    ProductPage.validarCarrinho();

});

When("avanço para a tela de pagamento", () => {
    CartPage.irParaCheckout();
});

Then("devo visualizar o produto na tela de pagamento", () => {
    CartPage.validarTelaCheckout();
    CartPage.validarProdutoNoCheckout();
});