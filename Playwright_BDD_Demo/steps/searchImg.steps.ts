import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../hooks/hooks';
import { SearchImgPage } from '../pages/searchImgPage';

//search by image with image path
let searchImgPage : SearchImgPage;
Given('User is on the Google homepage 1', async () => {
    searchImgPage =  new SearchImgPage();
});
When('user clicks on the "Tìm kiếm bằng hình ảnh" button 1', async () => {
    searchImgPage.clickButton();
});
When('user adds "image path" into search input', async () => {
    searchImgPage.selectPath();
});
Then('the searched results are displayed 1', async() =>{
    await page.waitForSelector("//body[@id='yDmH0d']");
    await expect(page.locator("//img[@src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv1FVZodKhWbJ58fG1o2cPkyaLN4_Mh51mg2RpGALhqv7IC984']")).toBeVisible();
});
//search by image with image link
Given('User is on the Google homepage 2', async() => {
    searchImgPage =  new SearchImgPage();
});
When('user clicks on the "Tìm kiếm bằng hình ảnh" button 2', async() => {
    searchImgPage.clickButton();
});
When('user adds "image link" into search input', async() => {
    searchImgPage.pasteLink("https://i.pinimg.com/736x/cc/52/3f/cc523f7dc794dfed54aac0973348e541.jpg");
    await page.locator("//div[@class='Qwbd3']").click();
});
Then('the searched results are displayed 2', async() => {
    await page.waitForSelector("//body[@id='yDmH0d']");
    await expect(page.locator("//img[@src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS180KDJeNSEHfAReDb562WClIvmFiX-_FTjIVlQDiNdzncnU3_']")).toBeVisible();
});