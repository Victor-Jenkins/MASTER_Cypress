import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

const elements1 = {
  cookies: () => cy.get('[class*="fs-cc-banner_button w-button"]'),
  list: () => cy.get("#w-dropdown-list-0 > div.dropmenu-wrapper > div:nth-child(1) > div.dropmenu-links > a:nth-child(2)"),
  buyCenter: () => cy.get("#cover-cta-Compra"),
  madridButton: () => cy.contains('Cómo').scrollIntoView() ,
  reservation: () => cy.contains('Abre los puntos del orden').scrollIntoView() ,
  x: () => cy.contains('Tecnología que se adapta ').scrollIntoView() ,
  hour: () => cy.get('a[href="/clientes-feed"]').eq(0),
  submit: () =>cy.get('div.navbar_buttons a').eq(4),
  burger: () => cy.get('#w-dropdown-toggle-0 > div.icon.w-icon-dropdown-toggle'),
  name: () => cy.get('input[data-name="Nombre"]'),
  email: () => cy.get('input[placeholder="Email"]'),
  sector: () => cy.get('#Sector-2').select('ONG'),
  ORG: () => cy.get('input[data-name="Organizacion"]'),
  use: () => cy.get('#Casos-De-Uso-contacto').select('Asambleas'),
  telephone: () => cy.get('input[data-name="Telefono"]'),
  acceptConditions: () => cy.get('#wf-form-Form-demo > div.recaptcha-wrapper > label > div.w-checkbox-input.w-checkbox-input--inputType-custom.form_checkbox'),
  submitQuestionary: () => cy.get('#wf-form-Form-demo > input.button.is-large.is-beatyblue.w-button'),
  



};

Given("A web browser is at the Kuorum page", () => {
  cy.visit("https://www.kuorum.org/");
});
When("A user accept cookies", () => {
  elements1.cookies().click();
  elements1.burger().click();
});
When("Click on List", () => {
  elements1.list().click();
});
Then("the url will contains the subdirectory", () => {
  cy.url().should("contains", ".org");
});
Then("I want explore navigation", () => {
  elements1.madridButton().click();
});
Then("Start a reservation", () => {
  
  elements1.reservation().click();
  
  elements1.x().click();
  elements1.hour().click();
  elements1.submit().click();
 
});
Then("A user enters the personal data with an incorrect email", () => {
  elements1.name().type("Victor");
    elements1.email().type("bigfishx@@icloud.com");
    elements1.sector();
    elements1.ORG().type("Kuorum.org");
    elements1.use();
    elements1.telephone().type("666427468");
    elements1.acceptConditions().click();
   
    elements1.submitQuestionary().click();
});