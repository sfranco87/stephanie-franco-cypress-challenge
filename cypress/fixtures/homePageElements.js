class HomePage {
    getSignUpNavButton() {
        return cy.get('[data-target="#signInModal"]');
    }
    getSignUpUserNameField() {
        return cy.get('#sign-username');
    }
    getSignUpPasswordField() {
        return cy.get('#sign-password');
    }
    getSignUpButton() {
        return cy.contains('Sign up');
    }
    getSignUpModalCloseX() {
        return cy.contains('Close');
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
    getSignUpModal() {
        return cy.get('#signInModalLabel');
    }       
}
export default HomePage