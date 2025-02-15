import '@testing-library/cypress/add-commands';

describe('Product card tests', () => {
  it('tests all product card logic', () => {
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
    cy.findAllByTestId('itemsHandlerPlus').first().dblclick();

    // change category and rerender items
    cy.findByText('Meat').click();

    // check if current values after the rerender are right
    cy.findAllByRole('listitem', { current: true })
      .eq(1)
      .should('have.text', 'traditional');
    cy.findAllByRole('listitem', { current: false })
      .eq(4)
      .should('have.text', 'thin');

    cy.findAllByRole('listitem', { current: true })
      .eq(2)
      .should('have.text', '12 inch');
    cy.findAllByRole('listitem', { current: false })
      .eq(5)
      .should('have.text', '14 inch');

    // check disabled minus button
    cy.findAllByTestId('itemsHandlerMinus')
      .first()
      .as('minusButton')
      .dblclick();
    cy.findAllByText('3').eq(1).should('be.visible');

    // delete all added items
    cy.get('@thinType').click();
    cy.get('@14inch').click();
    cy.get('@minusButton').dblclick();

    cy.get('@16inch').click();
    cy.get('@minusButton').dblclick();

    // check all add buttons are showing
    cy.findAllByRole('button').should('have.length', 11);
  });
});
