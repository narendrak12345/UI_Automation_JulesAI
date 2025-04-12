
const { Page } = require('@playwright/test');

class LoginPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameinput = page.locator('[type="email"]');
    this.passwordinput = page.locator('[type="password"]');
    this.loginbtn = page.locator('//span[text()="Log in"]');
    this.invalidcredentials=page.locator('//div[text()="Your email and/or password are incorrects"]')
    this.QaJules=page.locator('//div[text()="Qa JULES"]')
    this.logoutfromlogin=page.locator('//div[text()="Log out"]')
    this.loginconfirmdemopage=page.locator('//div[text()="Demo"]')
  }

  async goto() {

    await this.page.goto('/');
  }

  async login(Username,Password){

    await this.usernameinput.fill(Username)
    await this.passwordinput.fill(Password)
    await this.loginbtn.isVisible()
    await this.loginbtn.click()
  }

  async logout(){

    await this.QaJules.click()
    await this.logoutfromlogin.isEnabled()
    await this.logoutfromlogin.click()

  }
}
module.exports = { LoginPage };
