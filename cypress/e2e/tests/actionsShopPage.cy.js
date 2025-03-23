const shopPage = require("../../pages/shopPage");

describe("shop page actions", () => {
  beforeEach(() => {
    cy.visit("https://shop.telnyx.com/");
  });
  it("checking the search function", () => {
    shopPage.clickSearchIcon();
    cy.wait(5000);
    shopPage.typeSearchField();
    shopPage.clickSearchFieldButton();
    shopPage.elements
      .productNameCard()
      .should("contain.text", "Telnyx Classic Hat");
  });

  it("checking that user has the ability to add a product to the cart", () => {
    shopPage.clickHeaderMenuShop();
    shopPage.elements.productGridContainer().should("be.visible");
    shopPage.clickAddToCard();
    shopPage.elements.yourCard().should("be.visible");
    shopPage.elements.productInTheCard().should("be.visible");
  });
});
