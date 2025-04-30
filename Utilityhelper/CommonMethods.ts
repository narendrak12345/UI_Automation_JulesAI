import {Locator, Page} from '@playwright/test'

export class helper{
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
      }
      
    async clickElement(selector:string){
        await this.page.locator(selector).isVisible()
        await this.page.locator(selector).click()

    }

    async clickElementBytext(text:string){

        await this.page.locator("//*[text()='"+text+"']").isVisible();
        await this.page.locator("//*[text()='"+text+"']").click()

    }

    async Clickdashboard(text:string){
        await this.page.locator("//*[@data-testid='"+text+"']").isVisible()
        await this.page.locator("//*[@data-testid='"+text+"']").click()
    }

    async Senkey(selector:string,text:string){

        await this.page.locator(selector).isVisible()
        await this.page.locator(selector).fill(text)

    }

}