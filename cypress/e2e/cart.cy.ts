/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('cart tests', () => {
  it('tests cart logic', () => {
    cy.visit('/');

    // add different items to the cart
    cy.findAllByText(/16 inch/i)
      .first()
      .click();
    cy.findAllByRole('button').first().as('addButton').click();

    cy.get('@addButton').click();
    cy.findAllByText(/14 inch/i)
      .eq(1)
      .click();
    cy.findAllByTestId('itemsHandlerPlus').eq(1).click().click();

    // check cart's values
    cy.findByText(/69 \$/i).should('be.visible');
    cy.findByText('4').should('be.visible');

    // go to item's page and add products there
    cy.findByText(/meat pizza/i).click();

    cy.get('@addButton').click();
    cy.findByText(/thin/i).click();
    cy.findByTestId('itemsHandlerPlus').click();

    // check cart's values
    cy.findByText(/104 \$/i).should('be.visible');
    cy.findByText('6').should('be.visible');

    // return to the home page
    cy.go('back');

    // check the cart again and go to the cart page
    cy.findByText(/104 \$/i).should('be.visible');
    cy.findByText('6').should('be.visible').click();

    // check cart items on the cart page
    cy.findAllByRole('heading', { level: 3 }).should('have.length', 5);
    cy.findByTestId('cartPageItemsCount').should('have.text', '6');
    cy.findByTestId('cartPageItemsPrice').should('have.text', '104$');

    // delete all items from the cart
    cy.findByText('Delete all items').click();
    cy.findByRole('heading', { level: 2 }).should(
      'have.text',
      'Your cart is empty 😕',
    );

    // return to the home page
    cy.findByText('Go Back').click();

    // check cart's values
    cy.findByText(/0 \$/i).should('be.visible');
    cy.findByText('0').should('be.visible');
  });
});
