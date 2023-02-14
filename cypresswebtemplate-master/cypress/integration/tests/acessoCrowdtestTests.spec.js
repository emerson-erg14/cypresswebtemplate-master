///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';

//teste de um mesmo grupo podem ficar dentro de um describe
describe('loginCrowdTest', ()=>{
    
    //uso o beforeEach p este iniciar antes de cada teste (it)
    beforeEach(()=>{
        cy.visit(Cypress.config('url'))  
    })

    it('RealizarLoginSucesso', ()=>{
        //Parametros (Arrange)
        var email = Cypress.config('email')
        var senha = Cypress.config('senha')
        var expectedText = "Bem-vindo ao Crowdtest! O que deseja fazer hoje?"

        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherEmail(email)
        loginPage.preencherSenha(senha)
        loginPage.clicarLogar()

        //Validacao (Assert)
        homePage.validarTituloHome(expectedText);   
    })

    //DATA-DRIVEN - ao usar dataDriven nao posso usar funcao =>
    const senhas = [1234, 1235, 8965]
    senhas.forEach(senha=>{
        it(`RealizarLoginInvalido - DataDriven ${senha}`, function(){
            //Parametros (Arrange)
            var email = Cypress.config('email')
            var msgErro = 'E-mail ou senha inválidos.'
            
            //Uso dos métodos das classes de Page (Acts)
            loginPage.preencherEmail(email)
            loginPage.preencherSenha(senha)
            loginPage.clicarLogar()
    
            //Validacao (Assert)
            loginPage.ValidarLoginInvalido(msgErro)
        })
    })


    //Exemplo de uso de xpath com Cypress
    it('Teste xpath',()=>{
        cy.xpath("//input[@id='login']").type('xpto')



    });


})
