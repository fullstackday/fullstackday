/// <reference types="cypress" />

describe('Workschedule', () => {

  beforeEach(() => {
    cy.intercept('POST', '**/records', {}).as('postRecords');

    cy.visit('http://127.0.0.1:4200/', {timeout: 500000});
  });

  it('should show new item after adding', () => {
    cy.get('[data-testid="home-button"')
      .should('contain.text', 'WorkSchedule');

    cy.get('[data-testid="add-work-item"]')
      .click();

    cy.get('app-work-time-editor')
      .within(() => {
        cy.get('[data-testid="input-project-name"]')
          .type('fullstack day testing');

        cy.get('[data-testid="input-start-date"]')
          .type('10/25/2021');

        cy.get('[data-testid="input-start-time"]')
          .type('12:00');

        cy.get('[data-testid="input-end-time"]')
          .type('12:30');

        cy.get('[data-testid="input-comment"]')
          .type('42');

        cy.get('[data-testid="save-button"]')
          .click();
      });

  })
});
