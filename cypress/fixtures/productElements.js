class Phones {
    getSamsungGalaxyS6() {
        return cy.contains('Samsung galaxy s6');
    }
    addToCart(){
        return cy.contains('Add to cart');
    }
}
export default Phones