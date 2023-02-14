/**************-- Mapeamento --********************/
const el = {
  emailField: '#login',
  senhaField:'#password',
  logarButton: ':nth-child(3) > .btn',
  pageEsperada: '.tester > .action > .col > .btn',
  msgErro: '.login-error'
}
/*****************-- Ações --***********************/
class LoginPage {
  preencherEmail(email){
      cy.get(el.emailField).type(email)
  }

  preencherSenha(senha){
      cy.get(el.senhaField).type(senha)
  }

  clicarLogar(){
      cy.get(el.logarButton).click()
  }

  validarLogin(texto){
      cy.get(el.pageEsperada).should('contain', texto)
  }

  ValidarLoginInvalido(msgErro){
      cy.get(el.msgErro).should('contain', msgErro)
  }
}
export default new LoginPage()

