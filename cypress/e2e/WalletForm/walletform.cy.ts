import { getDataCy } from '../../helpers';

describe('wallet form', () => {
  const someInvalidWallet = 'some_wallet';
  const validWallet = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  describe('desktop view', () => {
    beforeEach(() => {
      cy.viewport('macbook-16');
      cy.visit('http://localhost:3000/');
    });

    describe('invalid wallets', () => {
      it('tells the user when an address is not a valid ethereum address', () => {
        cy.get(getDataCy('form-wallet-address')).type(someInvalidWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get(getDataCy('form-input-error-message')).should('be.visible').should('contain.text', 'Enter a valid Ethereum wallet address');
      });

      it('does not make a call to getTokenBalances', () => {
        cy.intercept('/api/get-token-balances/*', cy.spy().as('getTokenBalances'));
        cy.get(getDataCy('form-wallet-address')).type(someInvalidWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get('@getTokenBalances').should('not.have.been.called');
      });
    });

    describe('valid wallets', () => {
      it('makes a call to get token balances', () => {
        cy.intercept('/api/get-token-balances/*', cy.spy().as('getTokenBalances'));
        cy.get(getDataCy('form-wallet-address')).type(validWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get('@getTokenBalances').should('have.been.called');
      });

      it('fires a notification when an address contains no balances', () => {
        cy.intercept('/api/get-token-balances/*', {
          statusCode: 404,
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(getDataCy('notification')).click().wait(1000);
        cy.get(getDataCy('form-wallet-address')).type(validWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get(getDataCy('notification')).should('be.visible');
      });
    });
  });

  describe('mobile view', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit('http://localhost:3000/');
    });

    describe('invalid wallets', () => {
      it('tells the user when an address is not a valid ethereum address', () => {
        cy.get(getDataCy('form-wallet-address')).type(someInvalidWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get(getDataCy('form-input-error-message')).should('be.visible').should('contain.text', 'Enter a valid Ethereum wallet address');
      });
    });

    describe('valid wallets', () => {
      it('fires a notification when an address contains no balances', () => {
        cy.intercept('/api/get-token-balances/*', {
          statusCode: 404,
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(getDataCy('notification')).click().wait(1000);
        cy.get(getDataCy('form-wallet-address')).type(validWallet);
        cy.get(getDataCy('form-wallet-submit')).click();
        cy.get(getDataCy('notification')).should('be.visible');
      });
    });
  });
});
