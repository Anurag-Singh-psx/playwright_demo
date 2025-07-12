import { Page } from "@playwright/test";
import { StudentLogin } from "./loginPage";
import { CommonPage } from "./commonPage";
import { ExceptionsPage } from "./exceptionsPage";


export class Pages {
  _studentLogin: StudentLogin;
  _common: CommonPage;
  _exceptionsPage:ExceptionsPage

  constructor(page: Page) {
    this._studentLogin = new StudentLogin(page);
    this._common = new CommonPage(page);
    this._exceptionsPage=new ExceptionsPage(page);
  }
}