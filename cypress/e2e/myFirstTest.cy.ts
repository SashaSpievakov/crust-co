/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    cy.get('h1').should('contain', 'Pizza Place');
  });
});
