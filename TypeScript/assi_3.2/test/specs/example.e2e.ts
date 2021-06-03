import { SortTypes } from './../pageobjects/hotelResults.page';
import MainPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import HomePage from '../pageobjects/home.page';
import HotelResultsPage from '../pageobjects/hotelResults.page';
import HotelDetailsPage from '../pageobjects/hotelDetails.page';
import hotelDetailsPage from '../pageobjects/hotelDetails.page';
import hotelResultsPage from '../pageobjects/hotelResults.page';


describe('Vacation Direct', () => {
    before(async () => {
        await MainPage.open();
        await MainPage.enterSearch('Vacation Direct')
        //let date = new Date();
        //await HomePage.searchHotel('Las Vegas',`${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`,'28')       
    });

    describe('assi 3.2', () => {
        it('should get Hotel search results', async () => {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
            //console.log(await (await HotelResultsPage.hotelNames).length + '=============================');
            expect (await(await HotelResultsPage.wayfinderinfoLocation).getText()).toHaveText('Las Vegas')
            expect(await(await HotelResultsPage.hotelNames).length).toBeGreaterThan(0);
        });
    });


    describe('assi 3.3 ', () => {
        it('should apply Hotel Filter', async () => {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
            await HotelResultsPage.applyHotelFilter('Delano')
            console.log(await (await HotelResultsPage.hotelNameFilter).getText() + '=============================')
            expect(await (await HotelResultsPage.hotelNameFilter).getText()).toHaveValueContaining('Delano');
        });

        it('should apply Star rating Filter', async () => {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
            await HotelResultsPage.applyStarRatingFilter('5');
            let noHotels = await (await (await HotelResultsPage.lbl5Start).getText()).substring(1, 3);
            console.log(await (await HotelResultsPage.countheader).getText() + '============================')
            expect(await (await (await HotelResultsPage.countheader).getText())).toHaveValueContaining(noHotels);
        });
    });

    describe('assi 3.4', () => {
        it('should have same hotel name and star rating of selected hotel on hotel details page', async () => {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await (await HotelResultsPage.hotelNameFilter).waitForDisplayed({ timeout: 10000 });
            let randomNum=Math.floor(Math.random() * 25); 
            console.log ('*************** '+randomNum)
            await HotelResultsPage.selectHotel(randomNum);
            let hotelName=await hotelDetailsPage.headerHotelName
            let hotelStarRate=await hotelDetailsPage.hoteldetailsstarrating;
            await(hotelName).waitForDisplayed({ timeout: 10000 });
            expect(await hotelName.getText()).toHaveText(hotelResultsPage.selectedhotel);
            expect(await (hotelStarRate.getAttribute('title'))).toHaveText(hotelResultsPage.selectedHotelStarRate)
        });

        it('room availability',async()=>
        {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await (await HotelResultsPage.hotelNameFilter).waitForDisplayed({ timeout: 10000 });
            await HotelResultsPage.selectHotel(0);
            let hotelName=await hotelDetailsPage.headerHotelName
            await (hotelName).waitForDisplayed({ timeout: 10000 });
            expect(await hotelName.getText()).toHaveText(hotelResultsPage.selectedhotel);
            expect(await(await hotelDetailsPage.btnBookRoom).length).toBeGreaterThan(0);
        });
    });



    describe('assi 3.5', () => {
        it('should apply Pagination', async () => {
            await HomePage.openHomePage();
            await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
            await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
            await HotelResultsPage.applyPagination()          
        });

        describe('sorting', () => {
            it('sorting according to Star rating', async() => {
                await HomePage.openHomePage();
                await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
                await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
                hotelResultsPage.applySort(SortTypes.StarRating)              
            });
            it('sorting according to Distance', async() => {
                await HomePage.openHomePage();
                await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
                await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
                hotelResultsPage.applySort(SortTypes.DistanceSort)              
            });
            it('sorting according to HotelName', async() => {
                await HomePage.openHomePage();
                await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
                await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
                hotelResultsPage.applySort(SortTypes.HotelName)              
            });
            it('sorting according to Price Per night', async() => {
                await HomePage.openHomePage();
                await HomePage.searchHotel('Las Vegas', '06-27-21', '06-29-21')
                await(await HotelResultsPage.hotelNameFilter).waitForDisplayed({timeout:10000});
                hotelResultsPage.applySort(SortTypes.PricePerNight)              
            });
        });
    });


    // describe('Google Page testing', () => {
    //     it('should display correct Title', async () => {
    //         await MainPage.open();
    //         await (await (MainPage.inputSearch)).waitForDisplayed({ timeout: 3000 })
    //         expect(await browser).toHaveTitle('Google');
    //     });

    //     it('should show correct Google Offered links', async () => {
    //         expect(await(await MainPage.linksOffered).length).toBeElementsArrayOfSize(9)
    //     });
    // });
});

