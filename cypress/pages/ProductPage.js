class ProductPage {

    acessarProdutos() {
        cy.contains("Products").click();
    }

    pesquisarProduto(produto) {
        cy.get("#search_product").clear().type(produto);
        cy.get("#submit_search").click();
    }

    validarBusca() {
        cy.contains("Searched Products").should("be.visible");
    }

    adicionarPrimeiroProdutoAoCarrinho() {
        cy.get(".product-image-wrapper")
            .first()
            .trigger("mouseover");

        cy.contains("Add to cart")
            .first()
            .click({ force: true });
    }

    acessarCarrinho() {
        cy.contains("View Cart").click();
    }

    validarCarrinho() {
        cy.contains("Shopping Cart").should("be.visible");
    }

}

export default new ProductPage();