import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

When("envio uma requisição GET para a API do Trello", () => {
    cy.request({
        method: "GET",
        url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    }).then((res) => {
        response = res;

        cy.log(JSON.stringify(response.body));
        console.log(response.body);
    });
});

Then("o status code da resposta deve ser 200", () => {
    expect(response.status).to.eq(200);
});

Then("devo exibir o nome da lista retornada", () => {
    const nomeLista = response.body.data.list.name;

    cy.log(`Nome da lista: ${nomeLista}`);

    expect(nomeLista).to.not.be.empty;
});