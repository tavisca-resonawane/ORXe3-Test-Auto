function addNumbers(num:number)
{
    var sum=0;
    for (let index = 1; index <= num; index++) {              
        sum=sum+index;               
    }
    return sum;
}

console.log('sum is '+addNumbers(6));