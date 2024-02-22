/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('filters tests', () => {
  it('tests products filtering logic in the application', () => {
    cy.visit('/');

    // change category to Grill
    cy.findByText(/grill/i).click();

    // check category changes
    cy.findAllByRole('heading', { level: 3 })
      .eq(0)
      .as('firstHeading')
      .should('have.text', 'Pepperoni Barbecue');

    // change sorting to 'A to Z'
    cy.findByText(/sort by/i).click();
    cy.findByText(/a to z/i).click();

    // check sorting changes
    cy.get('@firstHeading').should('have.text', 'Chicken Barbecue');

    // change price for the second item
    cy.findAllByText(/16 inch/i)
      .last()
      .click();
    cy.findAllByRole('heading', { level: 3 })
      .eq(3)
      .as('secondPrice')
      .should('have.text', '14$');

    // change sorting to price
    cy.findByText(/sort by/i).click();
    cy.findByText(/price/i).click();

    // check sorting changes
    cy.get('@firstHeading').should('have.text', 'Chicken Barbecue');
    cy.get('@secondPrice').should('have.text', '10$');

    // focus on the search input and type a value
    cy.findByTestId('searchIcon').click().type('pep');

    // check search input's sorting
    cy.findByRole('textbox').should('have.value', 'pep');
    cy.get('@firstHeading').should('have.text', 'Pepperoni Barbecue');
    cy.findAllByRole('heading', { level: 3 }).should('have.length', 2);
  });
});
