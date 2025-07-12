import { Page } from "@playwright/test";
import { Pages } from ".";
import { app } from "../locators";
import * as loginData from '../data/login.json';
import { CommonPage } from "./commonPage";

export class StudentLogin{
    readonly page:Page;
    readonly _commonPages: CommonPage;

     constructor (page:Page){
        this.page=page;
        this._commonPages = new CommonPage(this.page);
     }


     async enterLoginDetails(userName:string,password:string){
         await this._commonPages.enterRecord(`#${app.inputLayout.USER_NAME}`,userName)
         await this._commonPages.enterRecord(`#${app.inputLayout.PASSWORD}`,password)
     }

     async clickOnSubmitButton(){
         await this._commonPages.clickOn_button(`#${app.buttons.SUBMIT}`)
     }

     async navigateToLoginPage(){
         await this._commonPages.performClick_byRole("link","Practice");
         await this._commonPages.performClick_byRole("link","Test Login Page");
     }
}