"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    Object.defineProperty(HomePage.prototype, "btnMenuSearchhotel", {
        get: function () { return $('div.menu-item a[data-qaid="Link_hotel"]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "inptDestination", {
        get: function () { return $('#inputDestination'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "btnSearch", {
        get: function () { return $('button.js-hotel-search-submit-top'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "linksOffered", {
        get: function () { return $$('div#SIvCob a'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "lstDestPopUp", {
        get: function () { return $('#autosuggestRecentSearchesContainer_hotelDest'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "lstDestination", {
        get: function () { return $$('#ui-id-1 li'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "inputCheckInDate", {
        get: function () { return $('#inputCheckInDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "inputCheckOutDate", {
        get: function () { return $("#inputCheckOutDate"); },
        enumerable: false,
        configurable: true
    });
    HomePage.prototype.checkDate = function (chkDate) { return $("#jd-" + chkDate); };
    HomePage.prototype.checkOut = function (chkOut) { return $("#jd-" + chkOut); };
    HomePage.prototype.openHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.btnMenuSearchhotel];
                    case 1: 
                    //await browser.url('https://vacationsdirect.cxtrvl.com/');
                    return [4 /*yield*/, (_b.sent()).click()];
                    case 2:
                        //await browser.url('https://vacationsdirect.cxtrvl.com/');
                        _b.sent();
                        return [4 /*yield*/, this.inptDestination];
                    case 3: return [4 /*yield*/, (_b.sent()).waitForDisplayed({ timeout: 3000 })];
                    case 4:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, browser.getTitle()];
                    case 5:
                        _a.apply(void 0, [_b.sent()]).toBe('Home - Hotel Search');
                        console.log('Successfully navigated to Home page');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.searchHotel = function (dest, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.inptDestination];
                    case 1: return [4 /*yield*/, (_c.sent()).waitForDisplayed({ timeout: 1000 })];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.inptDestination];
                    case 3: return [4 /*yield*/, (_c.sent()).setValue(dest)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.lstDestPopUp];
                    case 5: return [4 /*yield*/, (_c.sent()).waitForDisplayed({ timeout: 3000 })];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.lstDestination];
                    case 7: return [4 /*yield*/, (_c.sent())[0].click()];
                    case 8:
                        _c.sent();
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.lstDestination];
                    case 9: return [4 /*yield*/, (_c.sent()).length];
                    case 10:
                        _b.apply(_a, [(_c.sent()) + " elements are"]);
                        return [4 /*yield*/, this.inputCheckInDate];
                    case 11: 
                    //await browser.pause(2000);
                    return [4 /*yield*/, (_c.sent()).click()];
                    case 12:
                        //await browser.pause(2000);
                        _c.sent();
                        return [4 /*yield*/, browser.pause(2000)];
                    case 13:
                        _c.sent();
                        return [4 /*yield*/, this.checkDate(startDate)];
                    case 14: return [4 /*yield*/, (_c.sent()).waitForDisplayed({ timeout: 3000 })];
                    case 15:
                        _c.sent();
                        return [4 /*yield*/, this.checkDate(startDate)];
                    case 16: return [4 /*yield*/, (_c.sent()).click()];
                    case 17:
                        _c.sent();
                        return [4 /*yield*/, browser.pause(3000)];
                    case 18:
                        _c.sent();
                        return [4 /*yield*/, this.checkOut(endDate)];
                    case 19: 
                    // await (await this.inputCheckOutDate).click() 
                    return [4 /*yield*/, (_c.sent()).click()];
                    case 20:
                        // await (await this.inputCheckOutDate).click() 
                        _c.sent();
                        return [4 /*yield*/, browser.pause(2000)];
                    case 21:
                        _c.sent();
                        return [4 /*yield*/, this.btnSearch];
                    case 22: return [4 /*yield*/, (_c.sent()).click()];
                    case 23:
                        _c.sent();
                        return [4 /*yield*/, browser.pause(5000)];
                    case 24:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePage;
}());
exports.default = new HomePage();
