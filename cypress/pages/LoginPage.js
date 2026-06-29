class LoginPage {

    acessarLogin() {
        cy.contains("Signup / Login").click();
    }

    preencherEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    preencherSenha(password) {
        cy.get('[data-qa="login-password"]').type(password);
    }

    clicarLogin() {
        cy.get('[data-qa="login-button"]').click();
    }

    validarLogin() {
        cy.contains("Logged in as").should("be.visible");
    }

}

export default new LoginPage();