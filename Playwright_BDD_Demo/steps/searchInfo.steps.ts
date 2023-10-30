import { Given, When, Then } from '@cucumber/cucumber';
import { SearchInfoPage } from '../pages/searchInfoPage';
import { expect } from '@playwright/test';
import { page } from '../hooks/hooks';

let searchInfoPage: SearchInfoPage;

//search for a product
Given('User is on the Google homepage "1"', async () => {
    searchInfoPage = new SearchInfoPage();

});
When('user fills "Apple" in the search input', async () => {
    searchInfoPage.fillInput('Apple');
});
When('user clicks on "Tìm trên Google" button "1"', async () => {
    searchInfoPage.pressButton();
});
Then('the "Apple" are displayed', async () => {
    await page.waitForSelector("//*[@class='main']");
    await expect(page.locator("//*[contains(@class, 'CCgQ5')]")).toBeVisible();
});

//search for a link
Given('User is on the Google homepage "2"', async () => {
    searchInfoPage = new SearchInfoPage();
});
When('user fills "link" in the search input', async () => {
    searchInfoPage.fillInput("https://bard.google.com/");
});
When('user clicks on "Tìm trên Google" button "2"', async () => {
    searchInfoPage.pressButton();
});
Then('the "link" are displayed', async () => {
    await page.waitForSelector("//*[@class='GyAeWb']");
    await expect(page.locator("//div[@class='tF2Cxc']//h3[@class='LC20lb MBeuO DKV0Md']")).toBeVisible();
});

//search for a location
Given('User is on the Google homepage "3"', async () => {
    searchInfoPage = new SearchInfoPage();
});
When('user fills "TMA Bình Định" in the search input', async () => {
    searchInfoPage.fillInput("TMA Bình Định");
});
When('user clicks on "Tìm trên Google" button "3"', async () => {
    searchInfoPage.pressButton();
});
Then('the "TMA info" are displayed', async () => {
    await page.waitForSelector("//*[@class='main']");
    await expect(page.locator("//img[@id ='lu_map']")).toBeVisible();
});

