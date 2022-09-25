import { hexToRgb } from '../../helpers';

describe('desktop navbar', () => {
  describe('common elements', () => {
    it('contains navigation links', () => {
      cy.visit('http://localhost:3000/');
      cy.viewport('macbook-16');
      cy.get('[data-cy="nav-links"]').should('be.visible');
    });

    it('contains toggle to change the theme from light to dark', () => {
      cy.get('[data-cy="nav-toggle-theme"]').should('be.visible');
    });

    it('contains the notifications button', () => {
      cy.get('[data-cy="nav-notification"]').should('be.visible');
    });

    it('contains the user profile button', () => {
      cy.get('[data-cy="nav-user-profile"]').should('be.visible');
    });
  });

  describe('themes', () => {
    describe('dark theme', () => {
      it('should have the full seabuggy logo', () => {
        cy.visit('http://localhost:3000/');
        cy.viewport('macbook-16');
        cy.get('[data-cy="dark-full-logo"]').should('have.attr', 'alt', 'Dark Seabuggy logo').should('be.visible');
      });

      it('has a dark background color', () => {
        cy.get('[data-cy="nav-container"]').should('have.css', 'background-color', hexToRgb('232946'));
      });

      it('has the active color on the dashboard button', () => {
        cy.get('[data-cy="nav-link-Dashboard"]').should('have.css', 'background-color', hexToRgb('15192A'));
      });

      it('has the toggle theme button styled for dark theme', () => {
        cy.get('[data-cy="nav-toggle-theme"]').should('have.css', 'background-color', hexToRgb('a6aed4'))
          .should('have.css', 'border-color', hexToRgb('767b97'));
      });
    });

    describe('light theme', () => {
      it('switches to light theme when using the toggle theme component', () => {
        cy.visit('http://localhost:3000/');
        cy.viewport('macbook-16');
        cy.get('[data-cy="nav-toggle-theme"]').click();
        cy.get('[data-cy="nav-container"]').should('have.css', 'background-color', hexToRgb('FFFFFE'));
      });

      it('should have the full seabuggy logo', () => {
        cy.visit('http://localhost:3000/');
        cy.viewport('macbook-16');
        cy.get('[data-cy="nav-toggle-theme"]').click();
        cy.get('[data-cy="light-full-logo"]').should('have.attr', 'alt', 'Light Seabuggy logo').should('be.visible');
      });

      it('has the active color on the dashboard button', () => {
        cy.get('[data-cy="nav-link-Dashboard"]').should('have.css', 'background-color', hexToRgb('0065CB'));
      });

      it('has the toggle theme button styled for light theme', () => {
        cy.get('[data-cy="nav-toggle-theme"]').should('have.css', 'background-color', hexToRgb('97D7E0'))
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
