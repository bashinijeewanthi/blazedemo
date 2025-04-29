import { Locator, Page, expect } from "@playwright/test";

export class welcomePage{

    readonly page: Page
    readonly fromPortDDL: Locator
    readonly toPortDDL: Locator
    readonly FindFlightsBtn : Locator

    constructor(page: Page){
        this.page = page
        this.fromPortDDL = page.locator('[name="fromPort"]')
        this.toPortDDL = page.locator('[name="toPort"]')
        this.FindFlightsBtn = page.locator('[type="submit"]')
    }
    async openApplication(){
        await this.page.goto('https://blazedemo.com/index.php')
            //this.test.setTimeout(50000)
    }

    async findFlights(fport: string,tport: string){
        await this.fromPortDDL.selectOption(fport)
        await this.toPortDDL.selectOption(tport)
        await this.FindFlightsBtn.click()
    }
}