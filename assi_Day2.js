
function smallNum() {
    let valNm = document.getElementById('smallNum').value;
    let myArr = valNm.split(',').map(x => parseInt(x));
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[i] > myArr[j]) {
                temp = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }
        }
        let lblNm = document.getElementById('lblNum');
        lblNm.innerHTML = 'Smallest number is' + myArr[0];
    }
}

function checkSubset() {
    let A = document.getElementById('num1').value.split(',').map(x => parseInt(x));
    let B = document.getElementById('num2').value.split(',').map(x => parseInt(x));

    if (A.length == B.length) {
        printOutput('A', 'B', isSubset(A, B), true);
    }
    else {
        if (A.length < B.length) {
            printOutput('A', 'B', isSubset(A, B), false);
        }
        else {
            printOutput('B', 'A', isSubset(B, A), false);
        }
    }
}

function isSubset(arr1, arr2) {
    let arrFilter = arr1.filter(x => arr2.includes(x));
    // if (JSON.stringify(arr1)==JSON.stringify(arrFilter)) {
    //     return true;
    // }
    if (arr1.length != arrFilter.length)
        return false;
    else {
        // comapring each element of array
        for (var i = 0; i < arr1.length; i++)
            if (arr1[i] != arrFilter[i])
                return false;
        return true;
    }

}

function printOutput(name1, name2, isSub, isSame) {
    let lblNm = document.getElementById('lblNum2');

    if (isSame && isSub)
        lblNm.innerHTML = 'A is same as B';
    else if (isSub)
        lblNm.innerHTML = name1 + 'is subset of ' + name2;
    else
        lblNm.innerHTML = name1 + ' and ' + name2 + ' are not equal';
}

// A = [1, 2, 3], B = [1, 2, 3, 4, 5],A is a subset of B 
// A = [3, 4, 5], B = [1, 2, 3, 4, 5],A is a subset of B 
// A = [3, 4], B = [1, 2, 3, 4, 5], A is a subset of B 
// A = [1, 2, 3], B = [1, 2, 3],A is same as B 
// A = [1, 2, 3, 4, 5], B = [2, 3, 4], B is a subset of A
// A = [1, 2, 6], B = [1, 2, 3, 4, 5],A and B are not equal.

function checkIfDivisible() {
    let numb = document.getElementById('num3').value.split(',').map(x => parseInt(x));
    numb.forEach(x=>(number)=>{
        if (number % 3 == 0) alert(number +' Number is divisible by 3');
        else if (number % 5 == 0) alert(number +' Number is divisible by 5');
        else if (number % 15 == 0) alert(number+' Number is divisible by 15'); 
        else (alert(number+' Number is NOT divisible by 3,5 or 15'));
    });
}
