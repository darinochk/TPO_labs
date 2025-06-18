import { test, expect } from '@playwright/test';

test('Почти идём на стендап', async ({ page }) => {

    await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');

    await page.getByRole('button', { name: 'All projects' }).click();

    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Tickets' }).click();

    const page1 = await page1Promise;
    await page1.goto('https://gid.vk.com/moskva/?utm_source=mail_ru&utm_medium=site&utm_content=all_projects&mt_link_id=mk2l14&mt_sub1=account.mail.ru');

    await page1.getByRole('navigation').getByRole('link', { name: 'Стендап' }).click();

    await page1.getByRole('button', { name: '30 пт' }).click();

    await page1.getByRole('heading', { name: 'Стендап в Москве' }).click();

    await expect(page1.getByText('Детям')).toBeVisible();
});