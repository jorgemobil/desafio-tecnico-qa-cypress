class CartPage {

    irParaCheckout() {
        cy.contains("Proceed To Checkout").click();
    }

    validarTelaCheckout() {
        cy.contains("Review Your Order").should("be.visible");
    }

    validarProdutoNoCheckout() {
        cy.get(".cart_description").should("be.visible");
        cy.get(".cart_quantity").should("be.visible");
        cy.get(".cart_total").should("be.visible");
    }

}

export default new CartPage();