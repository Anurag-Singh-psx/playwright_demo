import { test } from '../pages/fixtures'; // Your custom fixture
import { expect } from '@playwright/test';
import * as loginData from '../data/login.json';
import { app } from '../locators';
test.describe.configure({ mode: 'serial' });

test.describe('Login Page', () => {

  test('Verify login with valid credentials', async ({ sharedPage, pages }) => {
    await test.step('Add login details and submit', async () => {
      await pages._studentLogin.navigateToLoginPage();
      await pages._studentLogin.enterLoginDetails(loginData.USER_NAME, loginData.PASSWORD);
      await pages._studentLogin.clickOnSubmitButton();
    });

    await test.step('Validate login success message', async () => {
      const text = await sharedPage.locator(`#${app.pageLayout.LOOP_CONTAINER}`).textContent();
      expect(text).toContain(loginData.VALIDATION_LOGIN);
    });
  });

});
