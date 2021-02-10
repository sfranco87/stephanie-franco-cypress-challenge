class Cart {
    getCartNavButton() {
        return cy.contains('Cart');
    }
    getCartContents() {
        return cy.get('tr.success td');
    }
}
export default Cart