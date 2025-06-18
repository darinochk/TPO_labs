
import { Page } from '@playwright/test';

export class InboxPage {
  constructor(private page: Page) {}

  private inboxLabel = '//div[contains(text(), "Входящие")]';
  private firstEmail = '//div[@class="dataset__items"]//div[contains(@class, "letter-list__item")]';

  async isInboxVisible() {
    await this.page.locator(this.inboxLabel).waitFor();
  }

  async openFirstEmail() {
    await this.page.locator(this.firstEmail).click();
  }
}
