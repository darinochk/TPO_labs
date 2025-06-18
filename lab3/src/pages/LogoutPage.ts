
import { Page } from '@playwright/test';

export class LogoutPage {
  constructor(private page: Page) {}

  private accountMenu = '//button[contains(@aria-label,"Аккаунт")]';
  private logoutButton = '//a[contains(text(), "Выход")]';

  async logout() {
    await this.page.locator(this.accountMenu).click();
    await this.page.locator(this.logoutButton).click();
  }
}
