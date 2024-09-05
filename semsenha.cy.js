describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('catarina@email.com.br');
    cy.get('[data-test="fullName"]').type('Catarina Maria');
    cy.get('[data-test="registerUserName"]').type('catarinam');
    cy.get('[data-test="registerPassword"]').type('c000');
    cy.contains('button', 'Register').click();
    cy.contains('Mininum length is 8').should('be.visible');
  })
})
