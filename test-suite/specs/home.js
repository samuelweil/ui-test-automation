const { expect } = require('chai');

describe("Home page", () => {
  it("should have the right title", () => {
    browser.url("");

    console.log(browser.getTitle())

    const title = browser.getTitle();
    expect(title).to.equal('React App')
  });
});
