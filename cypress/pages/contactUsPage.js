class contactUsPage {
  elements = {
    reasonForContact: () => cy.get("div #Reason_for_Contact__c"),
    firstName: () => cy.get("#FirstName"),
    lastName: () => cy.get("#LastName"),
    businessEmail: () => cy.get("#Email"),
    phoneCode: () => cy.get("#Phone_Number_Extension__c"),
    phoneNumber: () => cy.get("#Phone_Number_Base__c"),
    companyWebsite: () => cy.get("#Website"),
    requestDescribe: () => cy.get("#LblForm_Additional_Information__c"),
    howHearAbout: () => cy.get("#How_did_you_hear_about_Telnyx_Open__c"),
    submitButton: () => cy.get("span .mktoButton"),
  };

  selectSalesInquiry() {
    this.elements.reasonForContact().select("Support");
  }

  typeFirstName() {
    this.elements.firstName().type("John");
  }

  typeLasttName() {
    this.elements.lastName().type("Smit");
  }

  typeBusinessEmail() {
    this.elements.businessEmail().type("john.smit@example.com");
  }

  selectCountry() {
    this.elements.phoneCode().select("United Kingdom (+44)");
  }

  typePhoneNumber() {
    this.elements.phoneNumber().type("01234567");
  }

  typeCompanyWebsite() {
    this.elements.companyWebsite().type("https://example.com");
  }

  typeRequestDescribe() {
    this.elements.requestDescribe().type("Problems with adding new users");
  }
  typeHowHearAbout() {
    this.elements.howHearAbout().type("On the recommendation");
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
  }
}
module.exports = new contactUsPage();
