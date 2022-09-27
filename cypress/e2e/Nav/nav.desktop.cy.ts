import { getDataCy, hexToRgb } from '../../helpers';

describe('desktop navbar', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
  });

  describe('common elements', () => {
    it('contains navigation links', () => {
      cy.visit('http://localhost:3000/');
      cy.get(getDataCy('nav-links')).should('be.visible');
    });

    it('contains toggle to change the theme from light to dark', () => {
      cy.get(getDataCy('nav-toggle-theme')).should('be.visible');
    });

    it('contains the notifications button', () => {
      cy.get(getDataCy('nav-notification')).should('be.visible');
    });

    it('contains the user profile button', () => {
      cy.get(getDataCy('nav-user-profile')).should('be.visible');
    });
  });

  describe('themes', () => {
    describe('dark theme', () => {
      it('should have the full seabuggy logo', () => {
        cy.visit('http://localhost:3000/');
        cy.get(getDataCy('dark-full-logo')).should('have.attr', 'alt', 'Dark Seabuggy logo').should('be.visible');
      });

      it('has a dark background color', () => {
        cy.get(getDataCy('nav-container')).should('have.css', 'background-color', hexToRgb('232946'));
      });

      it('has the active color on the dashboard button', () => {
        cy.get(getDataCy('nav-link-Dashboard')).should('have.css', 'background-color', hexToRgb('15192A'));
      });

      it('has the toggle theme button styled for dark theme', () => {
        cy.get(getDataCy('nav-toggle-theme')).should('have.css', 'background-color', hexToRgb('a6aed4'))
          .should('have.css', 'border-color', hexToRgb('767b97'));
      });
    });

    describe('light theme', () => {
      it('switches to light theme when using the toggle theme component', () => {
        cy.visit('http://localhost:3000/');
        cy.get(getDataCy('nav-toggle-theme')).click();
        cy.get(getDataCy('nav-container')).should('have.css', 'background-color', hexToRgb('FFFFFE'));
      });

      it('should have the full seabuggy logo', () => {
        cy.visit('http://localhost:3000/');
        cy.get(getDataCy('nav-toggle-theme')).click();
        cy.get(getDataCy('light-full-logo')).should('have.attr', 'alt', 'Light Seabuggy logo').should('be.visible');
      });

      it('has the active color on the dashboard button', () => {
        cy.get(getDataCy('nav-link-Dashboard')).should('have.css', 'background-color', hexToRgb('0065CB'));
      });

      it('has the toggle theme button styled for light theme', () => {
        cy.get(getDataCy('nav-toggle-theme')).should('have.css', 'background-color', hexToRgb('97D7E0'))
          .should('have.css', 'border-color', hexToRgb('61949b'));
      });
    });
  });
});

/*
 * Next.js linter has --isolatedModules, without an import or export this file
 * will not pass linting.
 */
export {};
