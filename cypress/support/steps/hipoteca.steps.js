import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";
beforeEach(() => {
  cy.viewport(1280, 800);
});

const elements = {

  calcula: () => cy.contains('Calcular hipoteca'),
    calcula1: () => cy.get('button[data-testid="button-component"]')
                      .contains('Calcular mi cuota')
,
    price: () => cy.get('input[name="propertyPrice"]'),

    burger: () => cy.contains('p.typography-component', 'Más servicios').should('contain', 'Más servicios'),
    term: () => cy.get('input[name="saving"]'),

    propose: () => cy.get('#mortgage-calculator-result-button'),
    interest: () => document.querySelector("#calculator > form > div > div > div.form-colums__column-right.flex.flex-col.gap-10.md\\:pl-10 > div:nth-child(2) > div > div > button:nth-child(3)"),
    new: () => cy.get('#__next > div > div.sc-2bd4f6bf-0.hjDHjA > div.sc-2bd4f6bf-7.hSzQuL > div.sc-2bd4f6bf-8.jNjzNC > div.sc-7edbacff-0.glSUeU > div:nth-child(2) > div > div'),
    second: () => cy.get('#__next > div > div.sc-2bd4f6bf-0.hjDHjA > div.sc-2bd4f6bf-7.hSzQuL > div.sc-2bd4f6bf-8.jNjzNC > div.sc-7edbacff-0.glSUeU > div:nth-child(2) > ul > li.sc-elYLMi.bMpchm'),
    modalUse: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(1)'),
    modalUse1: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(1) > ul > li:nth-child(3)'),
    modalWhen: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(2)'),
    modalWhen1: () => cy.get('[data-testid="form-information-data-whenBuy-item-2"]'),
    modalHmuch: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div.sc-fmrZth.kzdlLD'),
    modalStatus: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(3) > div > div'),
    modalStatus1: () => cy.get('[data-testid="form-information-data-workSituation-item-0"]'),
    confirmButton: () => cy.get('#button-mortgage-infomation'),
    name: () => cy. get ('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div.sc-a08df9b9-5.igApyW > div:nth-child(1)'),
    surname: () => cy. get ('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div.sc-a08df9b9-5.igApyW > div:nth-child(2)'),
  };


Given('I am on the Clikalia website', () => {
  cy.visit('https://clikalia.es/vender');
   cy.wait(7000);
   cy.get('#onetrust-reject-all-handler, button:contains("Rechazarlas todas")'),

    elements.burger().click();
});
When("As user clicks on Hipoteca", () => {

      cy.contains('Calcula tu hipoteca').click(),


      cy.url().should('include', '/hipotecas');
      elements.calcula().click()
});

Then('I select calcula tu hipoteca', () => {
elements.calcula1().should('be.visible').click();

elements.price().should('be.visible').click().clear().type("300000");

elements.term().should('be.visible').click().clear().type("100000");

elements.interest().should('be.visible').click();
elements.new().should('be.visible').click();
elements.second().should('be.visible').click();

elements.propose().should('be.visible').click();

});
Then('I proceed to get information', () => {
  elements.modalUse().click();
      elements.modalUse1().click();
      elements.modalWhen().click();
      elements.modalWhen1().click();
      elements.modalStatus().click();
      elements.modalStatus1().click();

      elements.modalHmuch().click();
      elements.modalHmuch().type("40000");

      elements.confirmButton().click();
      elements.name().click().type("Victor");
      elements.surname().click().type("Bañó Rodríguez");
});


