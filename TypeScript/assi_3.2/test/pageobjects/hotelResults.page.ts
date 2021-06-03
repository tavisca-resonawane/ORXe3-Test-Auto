import { SortTypes } from './hotelResults.page';
class HotelResults {

    get wayfinderinfoLocation() { return $('.wayfinder-info') }
    get hotelNameFilter() { return $('#HotelNameFilter') }
    get ddHotelFilter() { return $$('#ui-id-1 li') }
    get hotelNames() { return $$('a.hotel-name-titleshow-guest-summary') }
    get chkbx5Star() { return $('//input[@id=\'StarRatingFilter5\']//parent::li/label/span[@class=\'icon-checkmark\']') }
    get lbl5Start() { return $('//input[@id=\'StarRatingFilter5\']//parent::li/label/span[3]') }
    get countheader() { return $('h2.hotel-results-pagination-count-header') }
    get lstpagination() { return $$('.pagination-lg li') }
    get hotelinfo() { return $$('.hotel-results-hotel-info a.hotel-name') }
    get hotelStarRating() { return $$('.hotel-results-hotel-info dd.fi-star-rating') }
    get hoteldistance(){return $$('//dd[contains(text(),\'miles\')]')}
    get hotelPrice(){return $$('.total-cash .cash-value')}

    get btnstarRating() { return $('#StarRating') }
    get btnpricePerNight() { return $('#PricePerNight') }
    get btnDistance() { return $('#DistanceSort') }
    get btnSortHotelNm() { return $('#HotelName') }

    selectedhotel: string
    selectedHotelStarRate: string

    async applyHotelFilter(hotelName: string) {
        await (await this.hotelNameFilter).waitForDisplayed({ timeout: 3000 })
        await (await this.hotelNameFilter).setValue(hotelName)
        await browser.pause(2000);
        await (await this.ddHotelFilter)[0].click();
    }

    async applyStarRatingFilter(star: string) {
        await (await this.hotelNameFilter).waitForDisplayed({ timeout: 3000 })
        await (await this.chkbx5Star).click();
        await browser.pause(2000);
    }

    async GetHotelName() {
        let text = await (await this.hotelNameFilter).getText()
        console.log('hotel Name is ' + text);
        return text;
    }

    async applyPagination() {
        await (await this.hotelNameFilter).waitForDisplayed({ timeout: 5000 })
        let arrPgs = (await this.lstpagination)
        let pgCount = await arrPgs.length

        for (let i = 1; i < pgCount - 1; i++) {
            await arrPgs[i].click();
            await browser.pause(3000);
            //console.log('************'+await(await this.countheader).getText())
            expect(await (await this.countheader).getText()).toHaveValueContaining('' + i * 25)
        }
    }

    async selectHotel(indexOfhotel: number) {
        let selHotel = (await this.hotelinfo)[indexOfhotel]
        this.selectedhotel = await selHotel.getText();
        this.selectedHotelStarRate = await (await this.hotelStarRating)[indexOfhotel].getAttribute('title');
        console.log(this.selectedhotel + '^^^^^^^^^^^^^^^^^^^^' + indexOfhotel);
        console.log(this.selectedHotelStarRate + '^^^^^^^^^^^^^^^^^^^^' + indexOfhotel);
        await selHotel.click()
        await browser.pause(6000)
    }

    async applySort(sort: SortTypes) {
        let beforestr:string='';
        let afterStr:string='';
        switch (sort) {
            case SortTypes.StarRating:
                beforestr=await (await this.hotelStarRating)[0].getAttribute('title')
                console.log(beforestr + ' ^^^^^^^^^^^^^^^^^^^^');
                await (await this.btnstarRating).click()
                await browser.pause(5000)
                afterStr= await (await this.hotelStarRating)[0].getAttribute('title')
                console.log(afterStr + ' ^^^^^^^^^^^^^^^^^^^^');             
                break;
            case SortTypes.DistanceSort:
                beforestr=await (await this.hoteldistance)[0].getText()
                console.log(beforestr + ' ^^^^^^^^^^^^^^^^^^^^');
                await (await this.btnDistance).click()
                await browser.pause(5000)
                afterStr= await (await this.hoteldistance)[0].getText()
                console.log(afterStr + ' ^^^^^^^^^^^^^^^^^^^^');
                break;
            case SortTypes.HotelName:
                beforestr=await (await this.hotelinfo)[0].getText()
                console.log(beforestr + ' ^^^^^^^^^^^^^^^^^^^^');
                await (await this.btnSortHotelNm).click()
                afterStr= await (await this.hotelinfo)[0].getText()
                console.log(afterStr + ' ^^^^^^^^^^^^^^^^^^^^');
                break;
            case SortTypes.PricePerNight:
                beforestr=await (await this.hotelPrice)[0].getText()
                console.log(beforestr + ' ^^^^^^^^^^^^^^^^^^^^');
                await (await this.btnpricePerNight).click()
                afterStr= await (await this.hotelPrice)[0].getText()
                console.log(afterStr + ' ^^^^^^^^^^^^^^^^^^^^');
                break;
            default:
                break;
        }
        expect(afterStr).not.toHaveText(beforestr);
    }
}
export default new HotelResults();

export enum SortTypes {
    StarRating = "STAR_RATING",
    PricePerNight = "PRICE_PER_NIGHT",
    DistanceSort = "DISTANCE",
    HotelName = "HOTELNAME"
}