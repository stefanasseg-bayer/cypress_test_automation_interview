describe('Parking Cost Calculator', () => {
  before(async () => {
    await cy.visit('/');
  });
  it('has the correct title', () => {
    cy.get('.PageTitle').eq(0).should('have.text', 'PARKING COST CALCULATOR');
  });
  it('has a parking lot selector with 5 elements starting with "Valet Parking"', () => {
    cy.get('#ParkingLot').find('option').should('have.length', 5);
    cy.get('#ParkingLot').find('option').eq(0).should('have.text', 'Valet Parking');
  });
  it('can select "Economy Parking"', () => {
    cy.get('#ParkingLot').find('option').eq(2).should('have.text', 'Economy Parking');
    cy.get('#ParkingLot').select('Economy Parking');
    cy.get('#ParkingLot').find('option').eq(2).should('have.selected', true);
  });
});