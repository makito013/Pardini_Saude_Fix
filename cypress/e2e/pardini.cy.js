describe('Login e registro', () => {

    beforeEach(() => {
        sessionStorage.setItem('D3VL0', '@SNVRaro');

        cy.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        });
      });

    it('login com sucesso', () => {
        
        console.log('ceguei ate aqui')
        cy.visit("http://hml.saudefix.com.br/");
        //cy.get('[data-testid="devPass"]').type("@SNVRaro");
        //cy.getByTestId('loginLogoutButton');
        //cy.get('[data-cy="loginLogoutButton"]').click();
        cy.contains("Tranquilidade na saúde para você").should("be.visible");
        cy.get('[data-testid="loginLogoutButton"]').click();
        cy.contains("Acesso com e-mail ou CPF!").should("be.visible");
    });

});