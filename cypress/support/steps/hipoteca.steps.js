import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

const elements = {

  calcula: () => cy.get('#cover-cta-Hipoteca'),
    calcula1: () => cy.get('#calculateMortgageCTA'),
    price: () => cy.get('#mortgage-calculator-property-price-inputPrice-propertyPriceInput'),
    burger: () => cy.get('[data-testid="burgerMenuComponent-drawer-open-btn"]'),
    term: () => cy.get('#mortgage-calculator-contribution-price-inputPrice-propertyPriceInput'),
    propose: () => cy.get('#mortgage-calculator-result-button'),
    interest: () => cy.get('#mortgage-calculator-interest-rate-variable-control'),
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
});
When("As user clicks on Hipoteca", () => {
  elements.burger().click();
      cy.get('#burger-menu-hipotecas').click();
      cy.url().should('include', '/hipotecas');
      cy.get('#homeMortgage-coverDesktop > section').should('contain.text', 'Conseguimos tu mejor hipoteca');
      elements.calcula().click();
});
When('I select calcula tu hipoteca', () => {
  elements.calcula1().click();
  elements.price().click();
  elements.price().clear();
  elements.price().type("300000");

  elements.term().click();
  elements.term().clear();
  elements.term().type("100000");

  elements.interest().click();
  elements.new().click();
  elements.second().click();
  

  elements.propose().click();
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


