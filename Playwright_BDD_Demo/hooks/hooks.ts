import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page, firefox, webkit } from "playwright";

let page : Page;
let browser : Browser;

setDefaultTimeout(60000);

Before(async() => {
    try {
        //run on Chromium browser
        browser = await chromium.launch({headless : false});
        //run on Firefox browser
        //browser = await firefox.launch({headless : false});
        //run on Webkit browser
        //browser = await webkit.launch({headless : false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.google.com/");
        console.log(`captured site title as ${await page.title()}`);
    }
    catch (error) {
        console.log(`chrome navigation to demo site failed due to ${error}`);
        throw new Error(`chrome navigation to demo site failed due to ${error}`);
    }
    return page;
});

After(async() => {
    await browser.close();
});

export {page};