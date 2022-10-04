describe('Login e registro', () => {

    beforeEach(() => {
        sessionStorage.setItem('D3VL0', '@SNVRaro');
      });

    it('login com sucesso', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });

        cy.visit("http://hml.saudefix.com.br/");
        cy.wait(1000);
        //cy.get('[data-testid="devPass"]').type("@SNVRaro");
        //cy.getByTestId('loginLogoutButton');
        //cy.get('[data-cy="loginLogoutButton"]').click();
        cy.contains("Tranquilidade na saúde para você").should("be.visible");

    });

});