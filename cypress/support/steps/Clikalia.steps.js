import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

const elements = {
  
    cookies: () => cy.get("#onetrust-reject-all-handler"),
    buy: () => cy.get("#burger-menu-compra"),
    buyCenter: () => cy.get("#cover-cta-Compra"),
    madridButton: () => cy.contains('Madrid'),
    reservation: () => cy.get("#book-appointment-2649"),
    x: () => cy. get ('[data-testid="23-AGOSTO-button"]'),
    hour: () => cy. get ('[data-testid="10:30-button"]'),
    submit: () => cy.get("#arrangeVisit-continueButton"),
    burger: () => cy.get('[data-testid="burgerMenuComponent-drawer-open-btn"]'),
    name: () => cy. get ('[data-testid="sales-ts-contact-name"]'),
    surname: () => cy. get ('[data-testid="sales-ts-contact-surname"]'),
  };





Given("A web browser is at the Clikalia page", () => {
  cy.visit("https://clikalia.es/vender");
});
When("A user accept cookies", () => {
 elements.cookies().click();
});
When("Click on Buy Flat", () => {
  elements.burger().click();
    elements.buy().click();
    elements.buyCenter().click();
});
Then("the url will contains the subdirectory", () => {
  cy.url().should("contains", "/vender");
});
Then("I want buy on Madrid", () => {
  elements.madridButton().click();
});
Then("Start a reservation", () => {
  elements.reservation().click();
    
   elements.x().click();
   elements.hour().click();
   elements.submit().click();
});
Then("A user enters the name and surnames", () => {
  elements.name().type("Victor");
  elements.surname().type("Bañó Rodríguez");
});