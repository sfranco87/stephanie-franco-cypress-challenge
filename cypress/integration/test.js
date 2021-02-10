import HomePage from '../fixtures/homePageElements';
import Phones from '../fixtures/productElements';
import Cart from '../fixtures/cartElements';
var username = Cypress.env('username');
var password = Cypress.env('password');
const homePage = new HomePage();
const phones = new Phones();
const cart = new Cart();

describe('Verify SignUp, login, cart functionality', () => {
    beforeEach(() => {
//Task #1: Navigate to https://demoblaze.com
        cy.visit('https://demoblaze.com')
      })
    it('Create new account', () => {     
//Task #2: Click signup and create a new account
        homePage.getSignUpNavButton().click()
        homePage.getSignUpUserNameField().type(username)
        homePage.getSignUpPasswordField().type(password, {log : false})
        homePage.getSignUpButton().click()
            cy.log('Signup successful.');
    })
//Task #3: Login to your account
    it('Login to account', () => {
        homePage.getLoginNavButton().click()
        homePage.getLoginUserNameField().type(username)
        homePage.getLoginPasswordField().type(password, {log : false})
        homePage.getLoginButton().click()
        cy.log('Login successful.');
    })
//Task #4 & #5: Add 'Samsung Galaxy S6' to your cart, navigate to cart, and verify that you have the correct phone model
    it('Add item to cart and verify', () => {
        phones.getSamsungGalaxyS6().click()
        phones.addToCart().click();
        cy.log('Item added successfully')
        cart.getCartNavButton().click()
        cart.getCartContents().contains('td', 'Samsung galaxy s6');
        cy.log('Cart contents verified.')
    })
});