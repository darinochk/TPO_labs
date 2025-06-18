import { test, expect } from '@playwright/test';

test('Переход на календарь', async ({ page }) => {

  await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Calendar' }).click();

  const page1 = await page1Promise;

  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Попробовать' }).click();

  const page2 = await page2Promise;

  await expect(page.locator('[data-test-id="login-form-type-default"]').getByRole('button', {name: 'Sign in'})).toBeVisible();
});