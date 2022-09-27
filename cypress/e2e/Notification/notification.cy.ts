import { getDataCy } from '../../helpers';

describe('notifications', () => {
  describe('desktop notification', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
    });

    describe('actions', () => {
      it('dismisses the notification on click', () => {
        cy.visit('http://localhost:3000/');
        cy.get(getDataCy('notification')).should('be.visible')
          .click()
          .should('not.be.visible');
      });

      it('auto dismisses the notification after six seconds', () => {
        cy.visit('http://localhost:3000/');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(6500);
        cy.get(getDataCy('notification')).should('not.be.visible');
      });
    });
  });

  describe('mobile notifications', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    describe('actions', () => {
      it('dismisses the notification on click', () => {
        cy.visit('http://localhost:3000/');
        cy.get(getDataCy('notification')).should('be.visible')
          .click()
          .should('not.be.visible');
      });

      it('auto dismisses the notification after six seconds', () => {
        cy.visit('http://localhost:3000/');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(6500);
        cy.get(getDataCy('notification')).should('not.be.visible');
      });
    });
  });
});
