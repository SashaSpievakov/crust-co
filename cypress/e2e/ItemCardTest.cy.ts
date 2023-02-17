/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('itemCard tests', () => {
  it('tests all itemCard logic', () => {
    cy.visit('/');

    // add different items to the cart
    cy.findAllByText(/thin/i).first().as('thinType').click();
    cy.findAllByText(/14 inch/i)
      .first()
      .as('14inch')
      .click();
    cy.findAllByRole('button').first().click();

    cy.findAllByText(/16 inch/i)
      .first()
      .as('16inch')
      .click();
    cy.findByText(/18\$/i).should('be.visible');
    cy.findAllByTestId('itemsHandlerPlus').first().click().click();

    // change category and rerender items
    cy.findByText('Meat').click();

    // check if states after the rerender are right
    cy.findAllByText(/traditional/i)
      .first()
      .should('have.class', 'eBnDEA');
    cy.get('@thinType').should('have.class', 'eFmiEx');
    cy.findAllByText(/12 inch/i)
      .first()
      .should('have.class', 'eBnDEA');
    cy.get('@14inch').should('have.class', 'eFmiEx');

    // check disabled minus button
    cy.findAllByTestId('itemsHandlerMinus')
      .first()
      .as('minusButton')
      .click()
      .click();
    cy.findAllByText('3').eq(1).should('be.visible');

    // delete all added items
    cy.get('@thinType').click();
    cy.get('@14inch').click();
    cy.get('@minusButton').click().click();

    cy.get('@16inch').click();
    cy.get('@minusButton').click().click();

    // check all add buttons are showing
    cy.findAllByRole('button').should('have.length', 11);
  });
});
