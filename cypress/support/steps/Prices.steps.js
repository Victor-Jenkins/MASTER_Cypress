import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";


const elements = {
  calcula: () => cy.contains('h2', 'Pagas por el tamaño del censo'),
  calcula1: () => cy.get('div.faq div'),
  name: () => cy.get('input.input-style').eq(0),
  email: () => cy.get('#Email-10'),
  sector: () => cy.get('input[data-name="Organización"]'),
 
  up: () => cy.get('#email-form > div > div.heading-style-h3').scrollIntoView(),
  ORG: () => cy.get('#Organizaci-n'),
  use: () => 
  cy.get('form[name="wf-form-Pricing-form"] select').eq(0)
  .select('Asambleas'),
  modal: () => 
  cy.get('select.input-style').eq(1)
  .select('10.000'),

  telephone: () => cy.get('input.phone-pricing'),
  acceptConditions: () => cy.get('div.w-checkbox-input').eq(1),
  submitQuestionary: () => cy.get('input.is-full'),
  

 
};



Given('I am on the Kuorum website', () => {
  cy.visit("https://www.kuorum.org/precios");
});
When('As user clicks on different dropdowns', () => {
  cy.url().should('include', '/precios');
      cy.contains('h1', 'Consulta nuestros precios');

  
});
When('I type personal data like a client', () => {
  
  elements.name().type("Victor");
  elements.email().type("bigfishx@icloud.com");
  elements.up();
  elements.sector();
  elements.ORG().type("Kuorum.org");
  elements.use();
  elements.telephone().type("666427468");
  elements.modal();
  elements.acceptConditions().click();
});
Then('I can type all personal data in client area', () => {
  up: () => cy.get('#email-form > div > div.heading-style-h3').scrollIntoView(),
    elements.up();
});

