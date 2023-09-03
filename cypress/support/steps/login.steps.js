import {
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

const elements1 = {

  usernameInput: () => cy.get("#user-name"),
  passwordInput: () => cy.get("#password"),
  loginBtn: () => cy.get("#login-button"),
  errorMessage: () => cy.get('h3[data-test="error"]'),
};



Given("A web browser is at the saucelabs login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  elements1.usernameInput().type(username);
  elements1.passwordInput().type(password);
  elements1.loginBtn().click();
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    elements1.usernameInput().type(username);
  elements1.passwordInput().type(password);
  elements1.loginBtn().click();
});
})

