enum TripType 
{
    OneWay,
    RoundTrip    
}

function selectTripType(tType:TripType):string
{
    return "TripType selected as "+ TripType[tType];
}

console.log(selectTripType(TripType.OneWay));
console.log(selectTripType(TripType.RoundTrip));

function echo<T>(arg:T):T{
    return arg;
}
console.log(echo(123));
console.log(echo('Abc'));