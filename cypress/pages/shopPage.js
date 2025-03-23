class shopPage {
  elements = {
    searchIcon: () => cy.get(".header__search"),
    searchField: () => cy.get("#Search-In-Modal"),
    searchFieldButton: () => cy.get(".search__button.field__button"),
    searchResult: () => cy.get(".h2.center"),
    productNameCard: () => cy.get("#CardLink--6960027533390"),

    headerMenuShop: () => cy.get("#HeaderMenu-shop"),
    productGridContainer: () => cy.get("#ProductGridContainer"),
    addToCard: () => cy.get(".quick-add.no-js-hidden"),
    yourCard: () => cy.get(" .drawer__inner"),
    productInTheCard: () => cy.get(".drawer__cart-items-wrapper"),
  };
  clickSearchIcon() {
    this.elements.searchIcon().click();
  }

  typeSearchField() {
    this.elements.searchField().type("Telnyx Classic Hat");
  }

  clickSearchFieldButton() {
    this.elements.searchFieldButton().eq(0).click();
  }

  clickHeaderMenuShop() {
    this.elements.headerMenuShop().click();
  }

  clickAddToCard() {
    this.elements.addToCard().eq(0).click();
  }
}
module.exports = new shopPage();
