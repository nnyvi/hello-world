import {expect, type Locator} from '@playwright/test';
import { page } from '../hooks/hooks';
 export class SearchInfoPage {
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor () {
        this.searchInput = page.locator("//*[@class='gLFyf']");
        this.searchButton = page.getByRole('button', {name: "Tìm trên Google"});
        }
        async fillInput (text : string) {
            await this.searchInput.click();
            await this.searchInput.fill(text);
        }
        async pressButton () {
            await this.searchButton.click();
        }
    
 }