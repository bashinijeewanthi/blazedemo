import { Locator, Page, expect } from "@playwright/test";

export class reservePage{
    readonly page: Page
    readonly selectedFlight: Locator

    constructor(page: Page){
        this.page = page
        this.selectedFlight = page.locator('[type="submit"]').nth(3)
    }

    async chooseFlight(){
        this.selectedFlight.click()

    }
}
