function coutLegs() {
    let numChick = parseInt(document.getElementById('txtChicken').value);
    let numCow = parseInt(document.getElementById('txtCow').value);
    let numPig = parseInt(document.getElementById('txtPig').value);
    let legCount = document.getElementById('lblLegCount');

    const legs = {
        CHICKLEG: 2,
        COWLEG: 4
    }
    Object.freeze(legs);
    let totalLegs = (numChick * legs.CHICKLEG) + ((numCow + numPig) * legs.COWLEG);
    lblLegCount.innerHTML = totalLegs + "  Total legs of animal";
}

function reverseNumber() {
    let numRev = document.getElementById('txtrevNum').value.split("");
    let revLbl = document.getElementById('lblRev');
    let revArr = "";
    for (let index = numRev.length - 1; index >= 0; index--) {
        const element = numRev[index];
        revArr = revArr + element;
    }
    revLbl.innerHTML = " Reverse Number is " + revArr;

    // revLbl.innerHTML=numRev.reverse().join("").toString();
}

function checkIfPalindrom() {
    let numPal = document.getElementById('txtPal').value.split("");
    let palinLbl = document.getElementById('lblPalin');
    let isPal = false;
    const arrLen = numPal.length;
    for (let index = 0; index < numPal.length / 2; index++) {
        if (numPal[index] == numPal[arrLen - index - 1]) {
            isPal = true;
        }
        else {
            isPal = false;
            break;
        }
    }
    if (isPal) palinLbl.innerHTML = " It is a palindrome ";
    else palinLbl.innerHTML = "NOT a palindrome ";
}

