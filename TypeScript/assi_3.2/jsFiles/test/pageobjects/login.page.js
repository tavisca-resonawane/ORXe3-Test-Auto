"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = __importDefault(require("./page"));
/**
 * sub page containing specific selectors and methods for a specific page
 */
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MainPage.prototype, "inputUsername", {
        /**
         * define selectors using getter methods
         */
        get: function () { return $('#username'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainPage.prototype, "inputPassword", {
        get: function () { return $('#password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainPage.prototype, "btnSubmit", {
        get: function () { return $('button[type="submit"]'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainPage.prototype, "linksOffered", {
        get: function () { return $$('div#SIvCob a'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainPage.prototype, "inputSearch", {
        get: function () { return $('input.gLFyf.gsfi'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainPage.prototype, "searchResult", {
        get: function () { return $$('h3.LC20lb.DKV0Md'); },
        enumerable: false,
        configurable: true
    });
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    MainPage.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.inputUsername];
                    case 1: return [4 /*yield*/, (_a.sent()).setValue(username)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.inputPassword];
                    case 3: return [4 /*yield*/, (_a.sent()).setValue(password)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.btnSubmit];
                    case 5: return [4 /*yield*/, (_a.sent()).click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * overwrite specifc options to adapt it to page object
     */
    MainPage.prototype.open = function () {
        return _super.prototype.open.call(this, 'login');
    };
    MainPage.prototype.verifyTitle = function (tit) {
        return __awaiter(this, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, browser.getTitle()];
                    case 1:
                        title = _a.sent();
                        console.log('Title is ' + title);
                        expect(title).toBe(tit);
                        console.log('Title verified successfully as ' + title);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainPage.prototype.getAllOfferedLinks = function () {
        var arr = this.linksOffered;
        arr.forEach(function (x) { console.log(x.getText()); });
    };
    MainPage.prototype.enterSearch = function (vac) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.inputSearch];
                    case 1: return [4 /*yield*/, (_a.sent()).setValue('Vacation Direct')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, browser.keys('Enter')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.searchResult];
                    case 4: return [4 /*yield*/, (_a.sent())[0].click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainPage;
}(page_1.default));
exports.default = new MainPage();
