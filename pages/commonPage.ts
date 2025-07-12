import { Page } from "@playwright/test"
export class CommonPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    async enterRecord(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async clickOn_button(locator: string) {
        await this.page.locator(locator).click()
    }
    async performClick_byRole(roles:any, name: string) {
    await this.page.getByRole(roles, { name, exact: true }).click();
}
}