import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  inputUser,
  inputPass,
  divResult,
  loginButton
} from '../locators/exampleLocators';
import {
  getByLocator,
  getByLocatorAndFillIt,
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole
} from '../utils/interactions';

Given("El usuario esta en la pagina de login", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario ingresa el mail', async function () {
  for (const page of pages) {
    await getByLocator(page, inputUser);
    await getByLocatorAndFillIt(page, inputUser, "ricardo.vazquez@nespon.com.qa");
  }
});

When('El usuario ingresa la contraseña', async function () {
  for (const page of pages) {
    await getByLocator(page, inputPass);
    await getByLocatorAndFillIt(page, inputPass, "1Rastrojo");
  }
});
When('El usuario clickea el botón Login en salesforce', async function () {
  for (const page of pages) {
    (await getByLocator(page, loginButton));
  }
});

Then('El usuario es redireccionado a la vista 360 del cliente', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", divResult)).toBeTruthy();
  }
});
