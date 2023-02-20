/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('local Storage tests', () => {
  it('tests local storage logic', () => {
    cy.visit('/');

    // add different items to the cart
    cy.findAllByRole('button').as('allButtons').eq(0).click();
    cy.get('@allButtons').eq(1).click();
    cy.get('@allButtons').eq(2).click();
    cy.get('@allButtons').eq(3).click();
    cy.get('@allButtons').eq(4).click();

    // check cart's values
    cy.findByText(/68 \$/i).should('be.visible');
    cy.findByText('5').should('be.visible');

    // switch to the dark mode
    cy.findByTestId('themeIcon').as('themeIcon').click();

    // reload the page
    cy.reload();
    cy.reload();
    cy.reload();

    // check all items are saved and still showing
    // cy.get('[data-theme="dark"]').should('be.visible');
    cy.get('[data-theme="dark"]').should('be.visible');
    cy.findByText(/68 \$/i).should('be.visible');
    cy.findByText('5').should('be.visible').click();

    // check items on the cart page
    cy.reload();
    cy.findAllByRole('heading', { level: 3 }).should('have.length', 10);
  });
});
