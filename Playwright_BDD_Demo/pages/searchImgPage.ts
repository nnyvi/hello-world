import { type Locator } from '@playwright/test';
import { page } from '../hooks/hooks';
import { FileChooser } from '@playwright/test';

export class SearchImgPage {
    readonly imgButton: Locator;
    readonly pathInput: Locator;
    readonly linkInput: Locator;
    readonly searchInput: Locator;
    
    constructor() {
        this.imgButton = page.locator("//*[@class='Gdd5U']");
        this.pathInput = page.locator("//span[@jsname='tAPGc']");
        this.linkInput = page.locator("//*[@class='cB9M7']");
        this.searchInput = page.locator("//*[@class='gLFyf']");
    }
    async clickButton() {
        await this.imgButton.click();
        await page.waitForSelector("//*[@class='KoWHpd']");
    }
    async selectPath() {
        await this.pathInput.click();
        const [fileChooserEvent] = await Promise.all([
            page.waitForEvent('filechooser').catch(() => null),
            page.waitForLoadState('networkidle'),
          ]);
          
          if (page.isClosed()) {
            return (`Error closed`);
          } else if (fileChooserEvent !== null) {
            const fileChooser = fileChooserEvent as FileChooser;
            // Sử dụng fileChooser bình thường
            await fileChooser.setFiles('F:\Playwright_BDD_Demo\img\test.jpg');
          } else {
            // Xử lý trường hợp không có sự kiện filechooser
            return(`ow thế k có filechooder à?`);
          }
    }
    async pasteLink(link: string) {
        await this.linkInput.click();
        await this.linkInput.fill(link);
    }
}
