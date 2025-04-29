import { Locator, Page, expect } from "@playwright/test";

export class purchasePage{
    readonly page: Page
    readonly nameTxtBox: Locator
    readonly addressTxtBox: Locator
    readonly cityTxtBox: Locator
    readonly stateTxtBox: Locator
    readonly zipcodeTxtBox: Locator
    readonly cardTypeTxtBox: Locator
    readonly cardNumberTxtBox: Locator
    readonly cardMonthTxtBox: Locator
    readonly cardYearTxtBox: Locator
    readonly cardNameTxtBox: Locator
    readonly rememberMeCheckBox: Locator
    readonly purchaseFlightBtn: Locator

    constructor(page: Page){
        this.page = page
        this.nameTxtBox = page.locator('#inputName')
        this.addressTxtBox = page.locator('#address')
        this.cityTxtBox = page.locator ('#city')
        this.stateTxtBox = page.locator('#state')
        this.zipcodeTxtBox = page.locator('#zipCode')
        this.cardTypeTxtBox = page.locator('#cardType')
        this.cardNumberTxtBox = page.locator('#creditCardNumber')
        this.cardMonthTxtBox = page.locator('#creditCardMonth')
        this.cardYearTxtBox = page.locator('#creditCardYear')
        this.cardNameTxtBox = page.locator('#nameOnCard')
        this.rememberMeCheckBox = page.locator('#rememberMe')
        this.purchaseFlightBtn = page.locator('[type="submit"]')

    }

    async purchaseFlight(name: string, address: string, city: string, state: string, zipcode: string, cardType:string, cardNumber:string, cardMonth:string, cardYear:string, cardName: string){
        await this.nameTxtBox.fill(name)
        await this.addressTxtBox.fill(address)
        await this.cityTxtBox.fill(city)
        await this.stateTxtBox.fill(state)
        await this.zipcodeTxtBox.fill(zipcode)
        await this.cardTypeTxtBox.selectOption(cardType)
        await this.cardNumberTxtBox.fill(cardNumber)
        await this.cardMonthTxtBox.fill(cardMonth)
        await this.cardYearTxtBox.fill(cardYear)
        await this.cardNameTxtBox.fill(cardName)

        await this.rememberMeCheckBox.check()
        await this.purchaseFlightBtn.click()
    }
}