import { getDataCy } from '../../helpers';

describe('mobile navbar', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  describe('viewable elements', () => {
    it('displays the mobile hamburger menu', () => {
      cy.visit('http://localhost:3000/');
      cy.get(getDataCy('nav-hamburger-menu')).should('be.visible');
    });

    it('displays the mobile sized logo', () => {
      cy.get(getDataCy('nav-mobile-logo')).should('have.attr', 'alt', 'Mobile Seabuggy logo').should('be.visible');
    });

    it('displays the notifications button', () => {
      cy.get(getDataCy('nav-notification')).should('be.visible');
    });

    it('displays the user profile button', () => {
      cy.get(getDataCy('nav-user-profile')).should('be.visible');
    });
  });

  describe('mobile menu', () => {
    it('opens the mobile menu on click', () => {
      cy.visit('http://localhost:3000/');
      cy.get(getDataCy('nav-hamburger-menu')).click();
      cy.get(getDataCy('nav-mobile-menu')).should('be.visible');
    });

    it('displays nav buttons in the opened mobile menu', () => {
      cy.get(getDataCy('nav-mobile-link-Dashboard')).should('be.visible');
      cy.get(getDataCy('nav-mobile-link-Team')).should('be.visible');
    });

    it('closes the mobile menu on click when opened', () => {
      cy.get(getDataCy('nav-hamburger-menu')).click();
    });
  });
});
