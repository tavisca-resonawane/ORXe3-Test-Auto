var TripType;
(function (TripType) {
    TripType[TripType["OneWay"] = 0] = "OneWay";
    TripType[TripType["RoundTrip"] = 1] = "RoundTrip";
})(TripType || (TripType = {}));
function selectTripType(tType) {
    return "TripType selected as " + TripType[tType];
}
console.log(selectTripType(TripType.OneWay));
console.log(selectTripType(TripType.RoundTrip));
