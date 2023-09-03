import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

const elements = {

  usernameInput: () => cy.get("#user-name"),
  passwordInput: () => cy.get("#password"),
  loginBtn: () => cy.get("#login-button"),
  errorMessage: () => cy.get('h3[data-test="error"]'),
};



Given("A web browser is at the saucelabs login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  elements.usernameInput().type(username);
  elements.passwordInput().type(password);
  elements.loginBtn().click();
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    elements.usernameInput().type(username);
  elements.passwordInput().type(password);
  elements.loginBtn().click();
});
})
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  elements.errorMessage().should("have.text", errorMessage);
});
