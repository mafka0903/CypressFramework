class pricingPage {
  elements = {
    communications: () => cy.get(".c-PJLV.c-ihLeEO.c-PJLV-cHtIMp-dark-false"),
    downloadFirstName: () => cy.get("#FirstName"),
    downloadLastName: () => cy.get("#LastName"),
    downloadBussinessEmail: () => cy.get("#Email"),
    downloadSubmitButton: () => cy.get("span .mktoButton"),
  };

  clickMessagingAPI() {
    this.elements.communications().first().click();
  }

  typeDownloadFirstName() {
    this.elements.downloadFirstName().type("John");
  }

  typeDownloadLastName() {
    this.elements.downloadLastName().type("Smit");
  }

  typeDownloadBussinessEmail() {
    this.elements.downloadBussinessEmail().type("john.smit@example.com");
  }

  clickDownlosdSubmitButton() {
    this.elements.downloadSubmitButton().click();
  }
}

module.exports = new pricingPage();
