import { test } from '../pages/fixtures'; // Your custom fixture
import { expect } from '@playwright/test';
import * as exceptions from '../data/exceptions.json';
import { app } from '../locators';

test.describe.configure({ mode: 'serial' });

test.describe('Exceptions Page', () => {
 
  test('Verify edit row of your favorite foods', async ({ sharedPage, pages }) => {
    await test.step('Navigate to exception sharedPage', async () => {
      await pages._exceptionsPage.navigateToTestExceptionPage();
    });

    await test.step('Add food items', async () => {
      await pages._exceptionsPage.clickOnEditButton();
      await pages._exceptionsPage.enterFoodItem(app.inputLayout.ROW1, exceptions.FOOD_ITEMS[0]);
      await pages._exceptionsPage.clickOnSaveButton();
    });
    await test.step('Verify confirmation and loading State', async () => {
      await expect(sharedPage.locator(`#${app.pageLayout.LOADING}`)).toHaveCSS('display', 'none', { timeout: 20000 });
      await expect(sharedPage.locator(`#${app.pageLayout.CONFIRMATION}`)).toHaveText(exceptions.VALIDATION_MESSAGES.FOOD_ITEM_SAVE);
    });
  });

  test('Verify add row of your favorite foods', async ({ sharedPage, pages }) => {
    await test.step('Add food item', async () => {
      await pages._exceptionsPage.clickOnEditButton();
      await pages._exceptionsPage.enterFoodItem(app.inputLayout.ROW1, exceptions.FOOD_ITEMS[1]);
      await pages._exceptionsPage.clickOnAddButton();
    });

    await test.step('Verify confirmation and loading State', async () => {
      await expect(sharedPage.locator(`#${app.pageLayout.LOADING}`)).toHaveCSS('display', 'none', { timeout: 20000 });
      await expect(sharedPage.locator(`#${app.pageLayout.CONFIRMATION}`)).toHaveText(exceptions.VALIDATION_MESSAGES.FOOD_ITEM_ADDED);
    });
  });

  test('Verify remove row of your favorite foods', async ({ sharedPage, pages }) => {
    await test.step('Remove food item', async () => {
      await pages._exceptionsPage.clickOnRemoveButton();
    });

    await test.step('Verify confirmation and loading State', async () => {
      await expect(sharedPage.locator(`#${app.pageLayout.LOADING}`)).toHaveCSS('display', 'none', { timeout: 20000 });
      await expect(sharedPage.locator(`#${app.pageLayout.CONFIRMATION}`)).toHaveText(exceptions.VALIDATION_MESSAGES.FOOD_ITEM_REMOVE);
    });
  });
});