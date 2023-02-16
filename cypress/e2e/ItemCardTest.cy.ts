/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('ItemCard test', () => {
  it('tests all ItemCard logic', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: /pizza place/i });
  });
});
