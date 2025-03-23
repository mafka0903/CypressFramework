class homePage {
  elements = {
    telnyxSvg: () => cy.get(".c-UazGY .mchNoDecorate svg"),
    mainMenu: () => cy.get("#main-menu"),
    expiriensAI: () => cy.get("h1 .c-PJLV"),

    menuElements: () => cy.get(".c-swQxl"),
    dropdownProducts: () => cy.get(".c-jLWzSx"),

    headerOptions: () => cy.get("div .c-hzhYFJ"),

    footerSocial: () => cy.get(".c-tKuzq.mchNoDecorate"),
  };

  clickProducts() {
    this.elements.menuElements().first().click();
  }

  clickPricing() {
    this.elements.menuElements().eq(2).click();
  }

  clickContactUs() {
    this.elements.headerOptions().eq(2).click();
  }
}

module.exports = new homePage();
