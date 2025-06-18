# Test info

- Name: Гороскоп в поисковике
- Location: /Users/darinchik/Downloads/mailru-playwright/e2e/search.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Home' })

    at /Users/darinchik/Downloads/mailru-playwright/e2e/search.spec.ts:8:50
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Гороскоп в поисковике', async ({ page }) => {
   4 |
   5 |   await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');
   6 |
   7 |   const page1Promise = page.waitForEvent('popup');
>  8 |   await page.getByRole('link', { name: 'Home' }).click();
     |                                                  ^ Error: locator.click: Test ended.
   9 |
  10 |   const page1 = await page1Promise;
  11 |
  12 |   const requestInput = page1.frameLocator('iframe[class="search-arrow__frame qecepfa__cs3gds"]').locator('input[aria-label="Запрос"]');
  13 |
  14 |   await requestInput.fill('гороскоп весы положительный');
  15 |   await page1.getByTestId('search-button').click();
  16 |
  17 |
  18 |   await expect(page1.frameLocator('iframe[class="yandex-frame"]').getByText('картинки')).toBeVisible();
  19 | });
  20 |
  21 |
  22 | // <iframe __playwright_src__="/snapshot/frame@4237516955bfe87ccfc13022c18e3272" class="search-arrow__frame qecepfa__cs3gds" fetchpriority="high" loading="eager" name="1748563055053" style="height: 52px;" src="http://[::1]:63976/trace/snapshot/frame@4237516955bfe87ccfc13022c18e3272?trace=%2FUsers%2Fdarinchik%2FDownloads%2Fmailru-playwright%2Ftest-results%2Fe2e-login-test-chromium%2Ftrace.zip&amp;name=after%40call%4025"></iframe>
```