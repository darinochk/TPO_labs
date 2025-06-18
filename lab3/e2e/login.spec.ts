// // import { test, expect } from '@playwright/test';
// //
// // test('User can see inbox after login', async ({ page }) => {
// //   await page.goto('https://e.mail.ru/', { waitUntil: 'domcontentloaded' });
// //
// //   const usernameInput = page.locator('//input[@name="username"]');
// //   await usernameInput.waitFor({ state: 'visible', timeout: 15000 });
// //   await usernameInput.fill('chernyshovde2015@mail.ru');
// //
// //   await page.getByText('Sign in').nth(1).click();
// //   await page.getByText('Try another way to log in').click();
// //   await page.getByText('Skip').click();
// // //
// // //   // Подождать, пока появится input, даже если он hidden
// // //   const passwordInput = page.locator('//input[@name="password"]');
// // //   await page.waitForTimeout(3000); // подождать отрисовку
// // //
// // //   // Удалить атрибуты readonly и hidden (если поле не в iframe)
// // //   await page.evaluate(() => {
// // //     const el = document.querySelector('input[name="password"]');
// // //     if (el) {
// // //       const input = el as HTMLElement;
// // //       input.removeAttribute('readonly');
// // //       input.removeAttribute('hidden');
// // //       input.style.display = 'block';     // убираем display: none
// // //       input.style.visibility = 'visible'; // убираем visibility: hidden
// // //     }
// // //   });
// // //
// // //
// // //   await passwordInput.fill('darishka-Cher0928', { force: true });
// // //
// // //   await page.locator('//button[contains(text(), "Войти")]').click();
// // //
// // //   // Ждём переход на почту
// // //   await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
// // //
// // //   // Проверка, что мы в почтовом ящике
// // //   const inboxTitle = page.locator('text=Входящие');
// // //   await expect(inboxTitle).toBeVisible({ timeout: 15000 });
// // // });
// //
// //   const passwordInput = page.locator('input[name="password"]');
// //   await passwordInput.waitFor({ state: 'visible', timeout: 10000 });
// //   await passwordInput.fill('darishka-Cher0928');
// //
// //   // Кликаем кнопку входа
// //   await page.locator('button[type="submit"]').click();
// //
// //   // Ждём переход
// //   await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
// //
// //   // Проверяем, что мы в почтовом ящике
// //   const inboxTitle = page.locator('text=Входящие');
// //   await expect(inboxTitle).toBeVisible({ timeout: 15000 });
// //
// //   console.log('✅ Успешный вход');
// // });
//
// import { test, expect } from '@playwright/test';
//
// test('User can see inbox after login', async ({ page }) => {
//   // Увеличиваем timeout до 5 минут
//   test.setTimeout(300000);
//
//   try {
//     // 1. Настройка браузера для обхода защиты
//     await page.context().addInitScript(() => {
//       Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
//       Object.defineProperty(window, 'chrome', { get: () => undefined });
//     });
//
//     // 2. Установка реалистичных заголовков
//     await page.setExtraHTTPHeaders({
//       'Accept-Language': 'ru-RU,ru;q=0.9',
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
//     });
//
//     // 3. Переход на страницу с более мягким ожиданием
//     await page.goto('https://e.mail.ru/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 60000
//     });
//     await page.waitForLoadState('networkidle', { timeout: 60000 });
//
//     // 4. Ввод логина с проверкой видимости поля
//     const usernameField = page.locator('input[name="username"]');
//     await usernameField.waitFor({ state: 'visible', timeout: 60000 });
//     await usernameField.fill('chernyshovde2015@mail.ru', {
//       delay: 50 + Math.floor(Math.random() * 100)
//     });
//     await page.waitForTimeout(2000 + Math.floor(Math.random() * 2000));
//
//     // 5. Клик по кнопке входа с обработкой нескольких вариантов
//     const loginButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
//     const count = await loginButtons.count();
//
//     if (count === 0) {
//       throw new Error('Не найдено ни одной кнопки входа');
//     }
//
//     // Выбираем последнюю кнопку (обычно это основная)
//     await loginButtons.nth(count - 1).click();
//     await page.waitForTimeout(3000);
//
//     // 6. Проверка на капчу
//     const captcha = await page.getByText(/Капча|Captcha|Подтвердите/).isVisible().catch(() => false);
//     if (captcha) {
//       await page.screenshot({ path: 'captcha.png' });
//       console.log('⚠️ Обнаружена капча! Требуется ручной ввод');
//       await page.pause();
//       return;
//     }
//
//     // 7. Ожидание поля пароля с несколькими стратегиями
//     const passwordField = page.locator('input[name="password"], input[type="password"]');
//     const isPasswordVisible = await passwordField.isVisible().catch(() => false);
//
//     if (!isPasswordVisible) {
//       // Попытка альтернативного пути входа
//       try {
//         await page.getByText(/Другой способ|Try another way/).click({ timeout: 5000 });
//         await page.waitForTimeout(1000);
//         await page.getByText(/Пропустить|Skip/).click({ timeout: 5000 });
//         await page.waitForTimeout(1000);
//       } catch {
//         console.log('Альтернативный путь входа не доступен');
//       }
//     }
//
//     // Ожидаем появление поля пароля
//     await passwordField.waitFor({ state: 'visible', timeout: 30000 });
//
//     // 8. Ввод пароля
//     await passwordField.fill('darishka-Cher0928', {
//       delay: 30 + Math.floor(Math.random() * 70),
//       force: true
//     });
//     await page.waitForTimeout(1000);
//
//     // 9. Клик по кнопке подтверждения
//     const submitButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
//     await submitButtons.last().click();
//
//     // 10. Проверка успешного входа
//     await page.waitForURL(/inbox/, { timeout: 60000 });
//     await page.locator('[aria-label="Входящие"]').waitFor({ state: 'visible', timeout: 30000 });
//
//     console.log('✅ Успешный вход в почту');
//   } catch (error) {
//     // Попытка сделать скриншот перед закрытием страницы
//     try {
//       await page.screenshot({ path: `error-${Date.now()}.png` });
//     } catch (screenshotError) {
//       console.error('Не удалось сделать скриншот:', screenshotError);
//     }
//
//     console.error('❌ Ошибка:', error);
//     throw error;
//   }
// });

import { test, expect } from '@playwright/test';


test.describe('Вход и выход', () =>
{

  test.beforeEach(async ({page}) => {

      // await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');
      await page.goto('https://e.mail.ru');
      // await page.context().clearCookies();
      // await page.addInitScript(() =>{
      //     window.localStorage.clear();
      //     window.sessionStorage.clear();
      // })


      await page.getByText('Other').nth(1);
      await page.getByRole('textbox', {name: 'Account name'}).fill('chernyshovde2015@mail.ru');

      await page.locator('[data-test-id="login-form-type-default"]').getByRole('button', {name: 'Sign in'}).click();
      // await page.locator('[test-id="continue-button"]').getByRole('button', {name: 'Continue'}).click();


      await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
      await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();

      // await page.locator('input[name="password"]').fill('darishka-Cher0928');
      await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
      await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');
      await page.locator('[data-test-id="submit"]').click();

      await page.getByText('Sign in').first().click();
  })

  test('Проверка входа', async ({ page }) => {

      await expect(page).toHaveURL(/inbox/, { timeout: 150000 });

    const inboxLocator = page.locator('[data-testid="whiteline-account"]');
    await expect(inboxLocator).toBeVisible({ timeout: 15000 });

    console.log('При входе вы успешно зашли');
  });

  test('Проверка выхода', async ({ page }) => {

      await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
    await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();

    await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
    await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');

    await page.locator('[data-test-id="submit"]').click();
    await page.getByRole('img', { name: 'chernyshovde2015@mail.ru' }).click();

    await page.getByText('Log out').click();

      const inboxLocator = page.locator('[data-testid="whiteline-account"]');
      await expect(inboxLocator).toBeVisible({ timeout: 15000 });

      console.log('При выходе вы успешно вышли');
  });
}
)