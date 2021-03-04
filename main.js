function numberDoubler(num) {
    let endingNum = num;
    while (endingNum < 100) {
        endingNum = endingNum * 2;
    }
    return outputNum;
}

function stringRepeater(str) {
    const returningString = str;
    while (returningString.length < 10) {
        returningString += str;
    }
    return outputStr;
}

function makeDivisible(x, y) {
    const outputX = x;
    while (outputX % y !==0) {
        outputX+1;
    }
    return outputX;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};