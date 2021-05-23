var a;
function validateIfNumber(a: number) {
    if (a!==null || a == undefined) return a;//console.log('Value of a is ' + a);
    else return -1
}

console.log (validateIfNumber(9));
console.log(validateIfNumber(null));
console.log(validateIfNumber(undefined));