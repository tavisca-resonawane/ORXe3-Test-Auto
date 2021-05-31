"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_page_1 = __importDefault(require("../pageobjects/login.page"));
describe('Google Page testing', function () {
    it('should display correct Title', function () {
        login_page_1.default.open();
        login_page_1.default.verifyTitle('Google');
    });
    it('should show correct Google Offered links', function () {
        login_page_1.default.getAllOfferedLinks();
    });
});
// describe('Vacation Direct', () => {
//     before(async () => {
//         await MainPage.open();
//         await MainPage.enterSearch('Vacation Direct')
//         //let date = new Date();
//         //await HomePage.searchHotel('Las Vegas',`${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`,'28')       
//     });
// describe('should return Hotel results', () => {
//     it('should get Hotel search results', async () => {
//         await HomePage.openHomePage();
//         await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
//         console.log(await(await HotelResults.hotelNames).length+'=============================');
//         expect(await (await HotelResults.hotelNames.length)).not.toBeLessThan(0);
//     });
// });
// describe('should apply Hotel Filter', () => {
//     it('should apply Hotel Filter', async () => {
//         await HomePage.openHomePage();
//         await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
//         await HotelResults.applyHotelFilter('Delano')
//         console.log(await (await HotelResults.hotelNameFilter).getText()+'=============================')
//         expect(await (await HotelResults.hotelNameFilter).getText()).toHaveValueContaining('Delano');
//     });
// });
// describe('should apply Star rating Filter', () => {
//     it('should apply Hotel Filter', async () => {
//         await HomePage.openHomePage();
//         await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
//         await HotelResults.applyStarRatingFilter('5');
//         let noHotels = await (await (await hotelResultsPage.lbl5Start).getText()).substring(1, 3);
//         console.log(await (await hotelResultsPage.countheader).getText() + '============================')
//         expect(await (await (await HotelResults.countheader).getText())).toHaveValueContaining(noHotels);
//     });
// });
//});
