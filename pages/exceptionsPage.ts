import { Page } from "@playwright/test";
import { app } from "../locators";
import { CommonPage } from "./commonPage";

export class ExceptionsPage{
    readonly page:Page;
    readonly _commonPages: CommonPage;

     constructor (page:Page){
        this.page=page;
        this._commonPages = new CommonPage(this.page);
     }

     async enterFoodItem(rowId:string,foodItem:string){
         await this._commonPages.enterRecord(`#${rowId} .${app.inputLayout.INPUT_FIELD}`,foodItem)
     }

     async clickOnRemoveButton(){
         await this._commonPages.clickOn_button(`#${app.buttons.REMOVE_BTN}`)
     }

     async clickOnAddButton(){
         await this._commonPages.clickOn_button(`#${app.buttons.ADD_BTN}`)
     }

     async clickOnSaveButton(){
         await this._commonPages.clickOn_button(`#${app.buttons.SAVE_BTN}`)
     }

     async clickOnEditButton(){
         await this._commonPages.clickOn_button(`#${app.buttons.EDIT_BTN}`)
     }

     async navigateToTestExceptionPage(){
         await this._commonPages.performClick_byRole("link","Practice");
         await this._commonPages.performClick_byRole("link","Test Exceptions");
     }
}