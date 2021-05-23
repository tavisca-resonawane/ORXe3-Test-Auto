//var num=0;
function addNumbers(num) {
    var sum = 0;
    for (var index = 1; index <= num; index++) {
        sum = sum + index;
    }
    return sum;
}
console.log('sum is ' + addNumbers(6));
