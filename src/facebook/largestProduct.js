// Given a list of integers, return the largest product that can be made by multiplying any three integers.
// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
module.exports = {
    largestProduct: function (/** array **/ listOfNumbers) {
        let largestFound = 0;

        for (let i = 0; i < listOfNumbers.length - 2; i++)
            for (let j = i + 1; j < listOfNumbers.length - 1; j++)
                for (let k = j + 1; k < listOfNumbers.length; k++)
                    if (listOfNumbers[i] * listOfNumbers[j] * listOfNumbers[k] > largestFound)
                        largestFound = listOfNumbers[i] * listOfNumbers[j] * listOfNumbers[k];

        return largestFound;
    }
};