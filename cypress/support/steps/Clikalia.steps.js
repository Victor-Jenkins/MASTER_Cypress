import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
beforeEach(() => {
  cy.viewport(1280, 800);
});

const elements = {
  // Botón de rechazar cookies
  cookiesReject: () =>
    cy.get('#onetrust-reject-all-handler, button:contains("Rechazarlas todas")'),

  // Menú hamburguesa
  burgerMenu: () =>
    cy.get('[data-testid="burgerMenuComponent-drawer-open-btn"]'),

  // Opción Comprar (no se usa, mantenida por estructura)
  buyOption: () =>
    cy.get(
      'document.querySelector("body > main > div > header > div.flex.p-6.md\\:p-8.max-w-\\[600px\\].flex-col.w-full.items-start.mt-auto.mr-auto.sm\\:items-center.text-center.sm\\:mx-auto.sm\\:max-w-\\[736px\\].md\\:mt-0.bg-white.z-\\[1\\] > div.relative.w-full > div.relative.flex.flex-col.w-full.text-content-high > div > input")'
    ),

  // CTA central
  buyCenter: () =>
    cy.get(
      'document.querySelector("body > main > div > header > div.flex.p-6.md\\:p-8.max-w-\\[600px\\].flex-col.w-full.items-start.mt-auto.mr-auto.sm\\:items-center.text-center.sm\\:mx-auto.sm\\:max-w-\\[736px\\].md\\:mt-0.bg-white.z-\\[1\\] > div.relative.w-full > div.relative.flex.flex-col.w-full.text-content-high > div > div")'
    ),

  // Botón Madrid
  madridButton: () => cy.contains("Madrid"),

  // Botón de reservar visita
  reservationButton: () => cy.contains("Agenda una visita"),

  // Día y hora (puedes ajustar los valores)
  dateButton: () =>
    cy.get(
      'document.querySelector("body > main > form > div > div > div > main > div.form-block-container.bg-surface-white.flex.flex-col.gap-6.p-6.sm\\:p-10 > div.flex.flex-col.gap-4 > div.relative.flex.flex-col.border.bg-surface-white.text-content-high.transition-colors.focus\\:outline-none.border-border-high.p-8 > div:nth-child(1) > div > div.absolute.right-0.top-0.h-\\[92px\\].w-\\[64px\\].cursor-pointer")'
    ),

  hourButton: () => cy.get('[data-testid="10:30-button"]'),

  submitButton: () => cy.get('#arrangeVisit-continueButton'),

  inputDate: () =>
    cy.get('[data-testid="typography-component"]').contains('21'),

  hourButtonAlt: () =>
    cy.get('[data-testid="input-filter-button"]').contains('10:00'),
};

Given("A web browser is at the Clikalia page", () => {
  cy.viewport(1280, 800); // Establecer viewport adecuado para CI
  cy.visit("https://clikalia.es/vender");
  cy.wait(7000); // Se puede reemplazar por intercept en futuro
});

When("A user rejects cookies", () => {
  cy.get('body').then($body => {
    const $btn = $body.find('button:contains("Rechazarlas todas")').filter(':visible');

    if ($btn.length) {
      cy.wrap($btn).click();
    } else {
      cy.log('Botón "Rechazarlas todas" no encontrado, continuo');
    }
  });
});

When("User navigates to Buy Flat", () => {
  cy.contains('p', 'Comprar').eq(0).should('be.visible').click();
  cy.get('input[type="text"]').first().type('Madrid{enter}');

  cy.get(
    'body > main > div > header > div.flex.p-6.md\\:p-8.max-w-\\[600px\\].flex-col.w-full.items-start.mt-auto.mr-auto.sm\\:items-center.text-center.sm\\:mx-auto.sm\\:max-w-\\[736px\\].md\\:mt-0.bg-white.z-\\[1\\] > div.relative.w-full > div:nth-child(2) > div > div > button'
  ).should('be.visible').click();

  cy.contains('Encontrar casa').should('be.visible').click();
});

Then("DEBUG - this step is loaded", () => {
  cy.log("✅ Step loaded correctamente");
  cy.wait(1000);
});

Then("User selects Madrid as location", () => {
  cy.contains('Piso en Paseo Reina Cristina').should('be.visible').click();
});


Then("User starts a reservation", () => {
 cy.contains('Agenda una visita', { timeout: 10000 })
   .should('be.visible')
   .click();








  cy.get('[data-testid="radio-button-component"] input[type="radio"][value="VIRTUAL"]')
    .should('exist')
    .check({ force: true });

  cy.get('span.flex.items-center.gap-1')
    .contains('Continuar')
    .should('be.visible')
    .click();

  cy.wait(7000);
});

Then("User enters name and surname", () => {
  elements.inputDate().should('be.visible').click();
  elements.hourButtonAlt().should('be.visible').click();

  cy.get('[data-testid="button-component"]')
    .contains('Continuar')
    .should('be.visible')
    .click();

  cy.get('input[placeholder="Nombre"]').type('Victor');
  cy.get('input[placeholder="Apellido Apellido"]').type('Bañó Rodríguez');
  cy.get('input[placeholder="correo@dirección.com"]').first().type('victor@test.com');

  cy.get('input[name="phone"]').type('600123123');
  cy.get('div[tabindex="0"]').first().click();
  cy.get('input[name="acceptTerms"]').check({ force: true });

  cy.get('input[name="confirmEmail"]').type('Test Finished');
});

