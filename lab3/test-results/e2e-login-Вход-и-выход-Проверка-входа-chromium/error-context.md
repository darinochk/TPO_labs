# Test info

- Name: Вход и выход >> Проверка входа
- Location: /Users/darinchik/Downloads/mailru-playwright/e2e/login.spec.ts:198:7

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Sign in').first()
    - locator resolved to <span class="vkuiButton__content">Sign in</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not visible
  - retrying click action
    - waiting 500ms
  - element was detached from the DOM, retrying
    - waiting for" https://e.mail.ru/inbox?authid=mc22jf7x.9da&autologin=no&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1" navigation to finish...
    - navigated to "https://e.mail.ru/inbox?authid=mc22jf7x.9da&autologin=no&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1"

    at /Users/darinchik/Downloads/mailru-playwright/e2e/login.spec.ts:195:47
```

# Test source

```ts
   95 | //     const loginButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
   96 | //     const count = await loginButtons.count();
   97 | //
   98 | //     if (count === 0) {
   99 | //       throw new Error('Не найдено ни одной кнопки входа');
  100 | //     }
  101 | //
  102 | //     // Выбираем последнюю кнопку (обычно это основная)
  103 | //     await loginButtons.nth(count - 1).click();
  104 | //     await page.waitForTimeout(3000);
  105 | //
  106 | //     // 6. Проверка на капчу
  107 | //     const captcha = await page.getByText(/Капча|Captcha|Подтвердите/).isVisible().catch(() => false);
  108 | //     if (captcha) {
  109 | //       await page.screenshot({ path: 'captcha.png' });
  110 | //       console.log('⚠️ Обнаружена капча! Требуется ручной ввод');
  111 | //       await page.pause();
  112 | //       return;
  113 | //     }
  114 | //
  115 | //     // 7. Ожидание поля пароля с несколькими стратегиями
  116 | //     const passwordField = page.locator('input[name="password"], input[type="password"]');
  117 | //     const isPasswordVisible = await passwordField.isVisible().catch(() => false);
  118 | //
  119 | //     if (!isPasswordVisible) {
  120 | //       // Попытка альтернативного пути входа
  121 | //       try {
  122 | //         await page.getByText(/Другой способ|Try another way/).click({ timeout: 5000 });
  123 | //         await page.waitForTimeout(1000);
  124 | //         await page.getByText(/Пропустить|Skip/).click({ timeout: 5000 });
  125 | //         await page.waitForTimeout(1000);
  126 | //       } catch {
  127 | //         console.log('Альтернативный путь входа не доступен');
  128 | //       }
  129 | //     }
  130 | //
  131 | //     // Ожидаем появление поля пароля
  132 | //     await passwordField.waitFor({ state: 'visible', timeout: 30000 });
  133 | //
  134 | //     // 8. Ввод пароля
  135 | //     await passwordField.fill('darishka-Cher0928', {
  136 | //       delay: 30 + Math.floor(Math.random() * 70),
  137 | //       force: true
  138 | //     });
  139 | //     await page.waitForTimeout(1000);
  140 | //
  141 | //     // 9. Клик по кнопке подтверждения
  142 | //     const submitButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
  143 | //     await submitButtons.last().click();
  144 | //
  145 | //     // 10. Проверка успешного входа
  146 | //     await page.waitForURL(/inbox/, { timeout: 60000 });
  147 | //     await page.locator('[aria-label="Входящие"]').waitFor({ state: 'visible', timeout: 30000 });
  148 | //
  149 | //     console.log('✅ Успешный вход в почту');
  150 | //   } catch (error) {
  151 | //     // Попытка сделать скриншот перед закрытием страницы
  152 | //     try {
  153 | //       await page.screenshot({ path: `error-${Date.now()}.png` });
  154 | //     } catch (screenshotError) {
  155 | //       console.error('Не удалось сделать скриншот:', screenshotError);
  156 | //     }
  157 | //
  158 | //     console.error('❌ Ошибка:', error);
  159 | //     throw error;
  160 | //   }
  161 | // });
  162 |
  163 | import { test, expect } from '@playwright/test';
  164 |
  165 |
  166 | test.describe('Вход и выход', () =>
  167 | {
  168 |
  169 |   test.beforeEach(async ({page}) => {
  170 |
  171 |       // await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');
  172 |       await page.goto('https://e.mail.ru');
  173 |       // await page.context().clearCookies();
  174 |       // await page.addInitScript(() =>{
  175 |       //     window.localStorage.clear();
  176 |       //     window.sessionStorage.clear();
  177 |       // })
  178 |
  179 |
  180 |       await page.getByText('Other').nth(1);
  181 |       await page.getByRole('textbox', {name: 'Account name'}).fill('chernyshovde2015@mail.ru');
  182 |
  183 |       await page.locator('[data-test-id="login-form-type-default"]').getByRole('button', {name: 'Sign in'}).click();
  184 |       // await page.locator('[test-id="continue-button"]').getByRole('button', {name: 'Continue'}).click();
  185 |
  186 |
  187 |       await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
  188 |       await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();
  189 |
  190 |       // await page.locator('input[name="password"]').fill('darishka-Cher0928');
  191 |       await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
  192 |       await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');
  193 |       await page.locator('[data-test-id="submit"]').click();
  194 |
> 195 |       await page.getByText('Sign in').first().click();
      |                                               ^ Error: locator.click: Test ended.
  196 |   })
  197 |
  198 |   test('Проверка входа', async ({ page }) => {
  199 |
  200 |       await expect(page).toHaveURL(/inbox/, { timeout: 150000 });
  201 |
  202 |     const inboxLocator = page.locator('[data-testid="whiteline-account"]');
  203 |     await expect(inboxLocator).toBeVisible({ timeout: 15000 });
  204 |
  205 |     console.log('При входе вы успешно зашли');
  206 |   });
  207 |
  208 |   test('Проверка выхода', async ({ page }) => {
  209 |
  210 |       await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
  211 |     await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();
  212 |
  213 |     await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
  214 |     await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');
  215 |
  216 |     await page.locator('[data-test-id="submit"]').click();
  217 |     await page.getByRole('img', { name: 'chernyshovde2015@mail.ru' }).click();
  218 |
  219 |     await page.getByText('Log out').click();
  220 |
  221 |       const inboxLocator = page.locator('[data-testid="whiteline-account"]');
  222 |       await expect(inboxLocator).toBeVisible({ timeout: 15000 });
  223 |
  224 |       console.log('При выходе вы успешно вышли');
  225 |   });
  226 | }
  227 | )
```