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
var HotelResults = /** @class */ (function () {
    function HotelResults() {
    }
    Object.defineProperty(HotelResults.prototype, "wayfinderinfoLocation", {
        get: function () { return $('.wayfinder-info'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "hotelNameFilter", {
        get: function () { return $('#HotelNameFilter'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "ddHotelFilter", {
        get: function () { return $$('#ui-id-1 li'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "hotelNames", {
        get: function () { return $$('a.hotel-name-titleshow-guest-summary'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "chkbx5Star", {
        get: function () { return $('//input[@id=\'StarRatingFilter5\']//parent::li/label/span[@class=\'icon-checkmark\']'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "lbl5Start", {
        get: function () { return $('//input[@id=\'StarRatingFilter5\']//parent::li/label/span[3]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "countheader", {
        get: function () { return $('h2.hotel-results-pagination-count-header'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HotelResults.prototype, "lstpagination", {
        get: function () { return $$('.pagination-lg li'); },
        enumerable: false,
        configurable: true
    });
    HotelResults.prototype.applyHotelFilter = function (hotelName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hotelNameFilter];
                    case 1: return [4 /*yield*/, (_a.sent()).waitForDisplayed({ timeout: 3000 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.hotelNameFilter];
                    case 3: return [4 /*yield*/, (_a.sent()).setValue(hotelName)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, browser.pause(2000)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.ddHotelFilter];
                    case 6: return [4 /*yield*/, (_a.sent())[0].click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, browser.pause(5000)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HotelResults.prototype.applyStarRatingFilter = function (star) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hotelNameFilter];
                    case 1: return [4 /*yield*/, (_a.sent()).waitForDisplayed({ timeout: 3000 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.chkbx5Star];
                    case 3: return [4 /*yield*/, (_a.sent()).click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, browser.pause(2000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HotelResults.prototype.GetHotelName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hotelNameFilter];
                    case 1: return [4 /*yield*/, (_a.sent()).getText()];
                    case 2:
                        text = _a.sent();
                        console.log('hotel Name is ' + text);
                        return [2 /*return*/, text];
                }
            });
        });
    };
    HotelResults.prototype.applyPagination = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrPgs, pgCount, _loop_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lstpagination];
                    case 1:
                        arrPgs = (_a.sent());
                        return [4 /*yield*/, arrPgs.length];
                    case 2:
                        pgCount = _a.sent();
                        _loop_1 = function (i) {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, arrPgs[i].click()];
                                    case 1:
                                        _b.sent();
                                        return [4 /*yield*/, browser.waitUntil(function () {
                                                return _this.countheader.getText().includes('' + i * 25);
                                            }, { timeout: 1000 })];
                                    case 2:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 1;
                        _a.label = 3;
                    case 3:
                        if (!(i < pgCount - 1)) return [3 /*break*/, 6];
                        return [5 /*yield**/, _loop_1(i)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return HotelResults;
}());
exports.default = new HotelResults();
//# sourceMappingURL=hotelResults.page.js.map