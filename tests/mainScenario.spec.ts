import {test, expect} from '@playwright/test'
import { welcomePage } from '../page_Objects/welcomePage'
import { reservePage } from '../page_Objects/reservePage'
import { purchasePage } from '../page_Objects/purchasePage'


test('purchase a Flight ticket', async({page}) =>{

    const welcomepageObj = new welcomePage(page)
    await welcomepageObj.openApplication()
    await welcomepageObj.findFlights("Boston","London")

     // Verify reserve page navigation
   const header = await page.textContent('h3') 
   expect (header).toBe('Flights from Boston to London: ')

    // Choose a Flight 
    const reservePageObj = new reservePage(page)
    await reservePageObj.chooseFlight()

    // Submit Form
    const purchasePageObj = new purchasePage(page)
    await purchasePageObj.purchaseFlight("Bashini Gamage","Piliyandala","Colombo","Western","10300","visa","123456789","1","2027","Bashini")

     // Verify confirmation page navigation
   const Finalheader = await page.textContent('h1') 
   expect (Finalheader).toBe('Thank you for your purchase today!')

   // window killing
   
})