const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/Login_page');
const testdata=require('../Testdata/testData.json')


test.describe('Verify valid login and logout flows with data validation',()=>{

  test('Verify valid login flows with data validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(testdata.Valid[0].email,testdata.Valid[0].password);
    await expect(login.loginconfirmdemopage).toContainText("Demos");
  });
  test('Verify logout flows with data validation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(testdata[0].email,testdata[0].password);
    await expect(login.loginconfirmdemopage).toContainText("Demo");
    await login.logout();
    await login.loginbtn.waitFor({state:'visible'});
    await expect(login.loginbtn).toContainText("Log in");

  });
});