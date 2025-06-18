import { test, expect } from '@playwright/test';

test('Гороскоп в поисковике', async ({ page }) => {

  await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Home' }).click();

  const page1 = await page1Promise;

  const requestInput = page1.frameLocator('iframe[class="search-arrow__frame qecepfa__cs3gds"]').locator('input[aria-label="Запрос"]');

  await requestInput.fill('гороскоп весы положительный');
  await page1.getByTestId('search-button').click();


  await expect(page1.frameLocator('iframe[class="yandex-frame"]').getByText('картинки')).toBeVisible();
});


// <iframe __playwright_src__="/snapshot/frame@4237516955bfe87ccfc13022c18e3272" class="search-arrow__frame qecepfa__cs3gds" fetchpriority="high" loading="eager" name="1748563055053" style="height: 52px;" src="http://[::1]:63976/trace/snapshot/frame@4237516955bfe87ccfc13022c18e3272?trace=%2FUsers%2Fdarinchik%2FDownloads%2Fmailru-playwright%2Ftest-results%2Fe2e-login-test-chromium%2Ftrace.zip&amp;name=after%40call%4025"></iframe>