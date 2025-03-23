const homePage = require("../../pages/homePage");
const contactUsPage = require("../../pages/contactUsPage");
const pricingPage = require("../../pages/pricingPage");

describe("home page actions", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com");
  });
  it("Сhecking the opening of the main page", () => {
    cy.wait(10000);
    homePage.elements.telnyxSvg().should("be.visible");
    homePage.elements
      .expiriensAI()
      .should("have.text", "Experience AI-powered connectivity");
  });

  it("Verify that clicking on a menu option with a dropdown correctly displays a list of available sub-options", () => {
    homePage.clickProducts();
    homePage.elements.dropdownProducts().should("be.visible");
  });

  it("Check that selecting a menu option without a dropdown redirects the user to the new page", () => {
    homePage.clickPricing();
    cy.location().should((location) => {
      expect(location.href).to.eq("https://telnyx.com/pricing");
    });
  });

  it("Checking that the contact form is sent successfully when all required fields are filled in", () => {
    homePage.elements.headerOptions().should("be.visible", { timeout: 10000 });
    homePage.clickContactUs();
    cy.wait(5000);
    contactUsPage.selectSalesInquiry();
    contactUsPage.typeFirstName();
    contactUsPage.typeLasttName();
    contactUsPage.typeBusinessEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeCompanyWebsite();
    contactUsPage.typeRequestDescribe();
    contactUsPage.typeHowHearAbout();
    contactUsPage.clickSubmitButton();
    //message
    cy.get(
      ".c-buvHyO.c-buvHyO-ijVfhdt-css.c-PJLV.c-PJLV-jWMPpM-centered-true"
    ).should("be.visible");
  });

  it("Checking that the contact form is sent successfully when all required fields are filled in", () => {
    homePage.elements.headerOptions().should("be.visible", { timeout: 10000 });
    homePage.clickContactUs();
    cy.wait(5000);
    contactUsPage.selectSalesInquiry();
    contactUsPage.typeFirstName();
    contactUsPage.typeLasttName();
    contactUsPage.typeBusinessEmail();
    contactUsPage.selectCountry();
    contactUsPage.typePhoneNumber();
    contactUsPage.typeCompanyWebsite();
    contactUsPage.typeRequestDescribe();
    contactUsPage.clickSubmitButton();
    //  message
    cy.get("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c").should(
      "be.visible"
    );
  });

  it("Check that Download pricing is performed successfully", () => {
    homePage.clickPricing();
    pricingPage.clickMessagingAPI();
    cy.scrollTo("bottom");
    pricingPage.elements
      .downloadFirstName()
      .should("exist")
      .should("be.visible", { timeout: 10000 });
    pricingPage.typeDownloadFirstName();
    pricingPage.typeDownloadLastName();
    pricingPage.typeDownloadBussinessEmail();
    pricingPage.clickDownlosdSubmitButton();
    cy.get(".c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ghYBfS-lead-true").should(
      "be.visible"
    );
  });

  it("Check that user navigate to a different domain page when clicking Shop", () => {
    homePage.elements.headerOptions().should("be.visible", { timeout: 10000 });
    homePage.elements
      .headerOptions()
      .eq(1)
      .should("have.attr", "href", "https://shop.telnyx.com")
      .and("have.attr", "target", "_blank");
  });

  it("Сhecking that  Footer Links will redirect to the correct pages", () => {
    homePage.elements.footerSocial().should("be.visible", { timeout: 10000 });
    homePage.elements
      .footerSocial()
      .eq(0)
      .should("have.attr", "href", "https://www.linkedin.com/company/telnyx/")
      .and("have.attr", "target", "_blank");

    homePage.elements
      .footerSocial()
      .eq(1)
      .should("have.attr", "href", "https://twitter.com/telnyx")
      .and("have.attr", "target", "_blank");

    homePage.elements
      .footerSocial()
      .eq(2)
      .should("have.attr", "href", "https://www.facebook.com/Telnyx/")
      .and("have.attr", "target", "_blank");
  });
});
