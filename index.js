// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street >= 42) {
        return street - 42;
    }
    else {
        return 42 - street;
    }
};

function distanceFromHqInFeet(street) {
    let distance = distanceFromHqInBlocks(street);
    return distance * 264;
};

function distanceTravelledInFeet(start,destination) {
    return Math.abs(start-destination) * 264;
};

function calculatesFarePrice(start,destination) {
    let trip = distanceTravelledInFeet(start,destination);
    let price;
    switch (true) {
        case trip <= 400:
            price = 0
            break;
        case trip <= 2000:
            price = (trip-400) * .02;
            break;
        case trip <= 2500:
            price = 25;
            break;
        case trip >= 2500:
            return `cannot travel that far`;
    }
    return price;
};