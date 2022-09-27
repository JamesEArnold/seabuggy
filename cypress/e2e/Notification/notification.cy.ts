import { getDataCy } from '../../helpers';

describe('notifications', () => {
  describe('desktop notification', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.visit('http://localhost:3000/');
    });

    describe('actions', () => {
      it('dismisses the notification on click', () => {
        cy.get(getDataCy('notification')).should('be.visible')
          .click()
          .should('not.be.visible');
      });

      it('auto dismisses the notification after six seconds', () => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(6500);
        cy.get(getDataCy('notification')).should('not.be.visible');
      });
    });
  });

  describe('mobile notifications', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('http://localhost:3000/');
    });

    describe('actions', () => {
      it('dismisses the notification on click', () => {
        cy.get(getDataCy('notification')).should('be.visible')
          .click()
          .should('not.be.visible');
      });

      it('auto dismisses the notification after six seconds', () => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(6500);
        cy.get(getDataCy('notification')).should('not.be.visible');
      });
    });
  });
});
