import HomePage from '../fixtures/HomePageObj';
import Phones from '../fixtures/productObj';
import Cart from '../fixtures/cartObj';
var username = Cypress.env('username');
var password = Cypress.env('password');
const homePage = new HomePage();
const phones = new Phones();
const cart = new Cart();

describe('Verify signin, login, cart functionality', () => {
    before(() => {
        cy.visit('https://demoblaze.com')
      })
    it('Create new account', () => {
//Task #1: Navigate to https://demoblaze.com
     
//Task #2: Click signup and create a new account
        homePage.getSignUpNavButton().click();
        homePage.getSignInUserNameField().type(username)
        homePage.getSignInPasswordField().type(password, {log : false})
        homePage.getSignUpButton().click();
        homePage.signInModalCloseX().click();
        cy.log('Signup successful.');
    })
//Task #3: Login to your account
    it('Login to account', () => {
        homePage.getLoginNavButton().click();
        homePage.getLoginUserNameField().type(username)
        homePage.getLoginPasswordField().type(password, {log : false})
        homePage.getLoginButton().click();
        cy.log('Login successful.');
    })
//Task #4: Add 'Samsung Galaxy S6' to your cart
    it('Add item to cart', () => {
        phones.getSamsungGalaxyS6().click();
        cart.getCartNavButton().click();
        cy.log('Item added successfully');
    })
//Task #5: Navigate to the cart, and verify that you have the correct phone model
});