import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Utilidades from '../pageobjects/Intro'

const Utils = new Utilidades();


Given('acess', () => {

    cy.viewport(1920,1080) // define tamanho da tela para teste
    cy.log('Screen resized 1920x1080 *') // mensagem de definição da tela

        Utils.site_access();

     cy.log('Site acessado !!! **********')

});

When('item {string}', (item) => {

    Utils.seleciona_item(item);
    cy.log('Item pesquisado ');
       

});


Then('verifica', () => {


    //==============================================
    cy.log('Item existe!!! ');

});




