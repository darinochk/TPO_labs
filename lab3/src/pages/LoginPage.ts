//
// import { Page } from '@playwright/test';
//
// export class LoginPage {
//   constructor(private page: Page) {}
//
//   private usernameField = '//input[@name="username"]';
//   private passwordField = '//input[@name="password"]';
//   private loginButton = '//button[contains(text(), "Account name")]';
//   //private loginButton = '//button[contains(text(), "Войти")]';
//   private passwordButton = '//button[contains(text(), "Enter password")]';
//
//   async login(username: string, password: string) {
//     await this.page.locator(this.usernameField).fill(username);
//     await this.page.locator(this.passwordButton).click();
//     await this.page.locator(this.passwordField).fill(password);
//     await this.page.locator(this.loginButton).click();
//   }
// }
