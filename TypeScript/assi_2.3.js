var myName;
var age;
var isAutomatedBefore;
function printStatement(myName, age, isAutomatedBefore) {
    if (isAutomatedBefore === void 0) { isAutomatedBefore = false; }
    if (isAutomatedBefore)
        console.log("My Name is " + myName + " I am '" + age + "' years old. I have done automation before");
    else
        console.log("My Name is '" + myName + "' I am '" + age + "' years old. I have NOT done automation before");
}
printStatement('abc', 28, false);
printStatement('xyz', 20, false);
printStatement('lmn', 28, true);
