///<reference types="cypress"/>


it('should make the registration',()=>{
cy.visit("https://sportamicii-alinaghetler-fe.herokuapp.com/registration")
cy.get('input[name=firstName]').type("Alina")
cy.get('input[name=lastName]').type("Ghetler")
cy.get('input[type=email]').type("alina.ghetler@gmail.com")
cy.get('input[type=password]').type("alina")
cy.get("button[class=post-user-button]").click();
})