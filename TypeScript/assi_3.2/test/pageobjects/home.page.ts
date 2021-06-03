class HomePage {

    get btnMenuSearchhotel() { return $('div.menu-item a[data-qaid="Link_hotel"]') }
    get inptDestination() { return $('#inputDestination') }
    get btnSearch() { return $('button.js-hotel-search-submit-top') }
    get linksOffered(){return $$('div#SIvCob a')}
    get lstDestPopUp(){return $('#autosuggestRecentSearchesContainer_hotelDest')}
    get lstDestination(){return $$('#ui-id-1 li')}
    get inputCheckInDate(){return $('#inputCheckInDate')}
    get inputCheckOutDate(){return $("#inputCheckOutDate")}
    
    checkDate(chkDate:string){return $(`#jd-${chkDate}`)}
    checkOut(chkOut:string){return $(`#jd-${chkOut}`)}

    async openHomePage() {
       //await browser.url('https://vacationsdirect.cxtrvl.com/');
        await (await this.btnMenuSearchhotel).click()
        await (await this.inptDestination).waitForDisplayed({timeout:3000})
        expect(await browser.getTitle()).toBe('Home - Hotel Search');
        console.log('Successfully navigated to Home page');
    }

    async searchHotel(dest:string,startDate:string,endDate:string) {
              
        await (await this.inptDestination).waitForDisplayed({timeout:1000})
        await (await this.inptDestination).setValue(dest);
        await (await this.lstDestPopUp).waitForDisplayed({timeout:3000})
        await (await this.lstDestination)[0].click();
        console.log (await (await this.lstDestination).length + " elements are");
        //await browser.pause(2000);
        await (await this.inputCheckInDate).click() 
        await browser.pause(1000);
        await (await this.checkDate(startDate)).waitForDisplayed({timeout:3000})
        await(await this.checkDate(startDate)).click();
        await browser.pause(1000);
       // await (await this.inputCheckOutDate).click() 
        await(await this.checkOut(endDate)).click();
        await browser.pause(1000);
        await(await this.btnSearch).click();
        //await browser.waitUntil(()=> browser.getTitle()==='Hotels Results',{timeout:5000})
    }
}

export default new HomePage();