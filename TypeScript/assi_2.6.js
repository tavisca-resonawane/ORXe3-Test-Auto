var FullName = /** @class */ (function () {
    function FullName() {
    }
    FullName.prototype.myFullName = function (fname, mname, lname) {
        if (fname === void 0) { fname = ''; }
        if (mname === void 0) { mname = ''; }
        if (lname === void 0) { lname = ''; }
        this.firstname = fname;
        this.middlefame = mname;
        this.lastname = lname;
        return this.firstname + " " + this.middlefame + " " + this.lastname;
    };
    return FullName;
}());
var objGetNm = new FullName();
console.log(objGetNm.myFullName('abc', 'xyz'));
console.log(objGetNm.myFullName('lml', 'xyz', 'pqr'));
console.log(objGetNm.myFullName('xyz'));
var AddNCancat = /** @class */ (function () {
    function AddNCancat() {
    }
    AddNCancat.prototype.addNumbers = function () {
        return this.a + this.b;
    };
    AddNCancat.prototype.concatStrings = function () {
        return this.abc + this.xyz;
    };
    return AddNCancat;
}());
var addnCon = new AddNCancat();
addnCon.a = 2;
addnCon.b = 3;
addnCon.abc = 'Hello';
addnCon.xyz = 'How are you';
console.log(addnCon.addNumbers());
console.log(addnCon.concatStrings());
