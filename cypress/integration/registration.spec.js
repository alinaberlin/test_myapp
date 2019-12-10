///<reference types="cypress"/>

it("should make the registration", () => {
    cy.visit("https://sportamicii-alinaghetler-fe.herokuapp.com/registration");
    cy.get("input[name=firstName]").type("Alina");
    cy.get("input[name=lastName]").type("Ghetler");
    cy.get("input[type=email]").type("alina04.ghetler@gmail.com");
    cy.get("input[type=password]").type("alina");
    cy.get("select").select("5deebb1888b1b3000315e363");
    cy.get("button").click();
    cy.wait(500);
    cy.get("input[name=email]").type("alina04.ghetler@gmail.com");
    cy.get("input[type=password]").type("alina");
    cy.get("button").click();
    cy.wait(500);
    cy.get("a")
        .contains("Add Event")
        .click();
    cy.wait(500);
    cy.get("input[name=title]").type("Handball");
    cy.get("input[name=date]").type("2019-12-22");
    cy.get("select[name=venues]").select("5deebb9188b1b3000315e365");
    cy.get("select[name=sports]").select("5deebb1888b1b3000315e363");
    cy.get("button").click();
});
