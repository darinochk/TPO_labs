import { test, expect } from '@playwright/test';

test('Почти регистрация на сайте знакомств', async ({ page }) => {

    await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');
    await page.getByRole('button', { name: 'All projects' }).click();

    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Dating', exact: true }).click();

    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'Create a profile' }).click();

    await expect(page.locator('[data-test-id="login-form-type-default"]').getByRole('button', {name: 'Sign in'})).toBeVisible();
});