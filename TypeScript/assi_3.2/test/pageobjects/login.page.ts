import { forEachChild } from 'typescript';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get linksOffered() { return $$('div#SIvCob a') }
    get inputSearch() { return $('input.gLFyf.gsfi') }
    get searchResult() { return $$('h3.LC20lb.DKV0Md') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username: string, password: string) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }

    async verifyTitle(tit: string) {
        let title = await browser.getTitle();
        console.log('Title is ' + title);
        expect(title).toBe(tit);
        console.log('Title verified successfully as==========' + title);
    }

     getAllOfferedLinks() {     
        let arr =  this.linksOffered;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            console.log(element.getText()+"==================");
        }
    }

    async enterSearch(vac: string) {
        await (await this.inputSearch).setValue('Vacation Direct');
        await browser.keys('Enter')
        await (await this.searchResult)[0].click();
    }
}

export default new MainPage();
