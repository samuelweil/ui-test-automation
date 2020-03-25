const { expect } = require('chai');

describe("Home page", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:5000");
    const title = browser.getTitle();
    expect(title).to.equal('React App')
  });
});
