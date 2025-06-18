
import { Page } from '@playwright/test';

export class ComposePage {
  constructor(private page: Page) {}

  private toField = '//input[@name="to"]';
  private subjectField = '//input[@name="subject"]';
  private bodyField = '//div[@role="textbox"]';
  private sendButton = '//span[text()="Отправить"]';

  async composeAndSendEmail(to: string, subject: string, body: string) {
    await this.page.locator(this.toField).fill(to);
    await this.page.locator(this.subjectField).fill(subject);
    await this.page.locator(this.bodyField).fill(body);
    await this.page.locator(this.sendButton).click();
  }
}
