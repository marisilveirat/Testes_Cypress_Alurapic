import Cadastro from '../support/pages/cadastro/pag-cadastro'

describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('http://localhost:4200/#home')
    //   cy.get('[data-test="register"]').click();
    //   cy.get('[data-test="email"]').type('catarina@email.com.br');
    //   cy.get('[data-test="fullName"]').type('Catarina Maria');
    //   cy.get('[data-test="registerUserName"]').type('catarinamm');
    //   cy.get('[data-test="registerPassword"]').type('catarina000');
    //   cy.contains('button', 'Register').click();
    Cadastro.acessarPagDeCadastro();
    Cadastro.preencherFormulário();
    Cadastro.confirmarCadastro()
    })
  })

