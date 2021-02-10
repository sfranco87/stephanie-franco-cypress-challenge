class HomePage {
    getSignUpNavButton() {
        return cy.get('[data-target="#signInModal"]');
    }
    getSignInUserNameField() {
        return cy.get('#sign-username');
    }
    getSignInPasswordField() {
        return cy.get('#sign-password');
    }
    getSignUpButton() {
        return cy.contains('Sign up');
    }
    signInModalCloseX() {
        return cy.get('button.close');
    }
    getLoginNavButton() {
        return cy.get('[data-target="#logInModal"]');
    }
    getLoginUserNameField() {
        return cy.get('#loginusername');
    }
    getLoginPasswordField() {
        return cy.get('#loginpassword');
    }
    getLoginButton() {
        return cy.contains('Log in');
    }
    getCartNavButton() {
        return cy.get('#cartur');
    }       
}
export default HomePage