function countNoOfVowels() {
    let str = document.getElementById('txtvowel').value.split(' ');
    let lblstr = document.getElementById('lblVowel');
    const vowels = 'aeiouAEIOU';
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        for (let j = 0; j < ele.length; j++) {
            if (vowels.indexOf(ele[j]) !== -1) {
                cnt += 1;
            }
        }
    }
    lblstr.innerHTML = "Number of vowels " + cnt;
}

function calculatefactorial() {
    let num = document.getElementById('num').value;
    let fact = 1;
    if (num == 0 || num == 1) {
        return 1;

    } else {

        for (i = 1; i <= num; i++) {
            fact *= i;
        }
    }
    alert("Factorial of " + num + " is " + fact);
}

function sumOfArray() {
    let numb = document.getElementById('num1').value.split(',').map(x => parseInt(x));
    let cont = 0;
    for (let index = 0; index < numb.length; index++) {
        cont = cont + numb[index];
    }
    alert("Sum is " + cont);
}