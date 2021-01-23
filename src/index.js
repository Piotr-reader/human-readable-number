module.exports = function toReadable(number) {
    let result = "";
    let humanNumbers = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let hundredNumbers = [
      "",
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    let hundred = ['hundred'];
    let numbers = number.toString();

    if (number < 20) {
      result = `${humanNumbers[number]}`;
    }

    if (number >= 20 && number < 100) {
      if (numbers[1] < 1) {
        result = `${hundredNumbers[numbers[0]]}`;
      } else {
        result = `${hundredNumbers[numbers[0]]} ${humanNumbers[numbers[1]]}`;
      }
    }

    if (number >= 100) {
      if (numbers[1] < 1 && numbers[2] < 1) {
        result = `${humanNumbers[numbers[0]]} ${hundred}`;
      } else if (numbers[1] < 1) {
        result = `${humanNumbers[numbers[0]]} ${hundred} ${humanNumbers[numbers[2]]}`;
      } else if (numbers[1] < 2) {
        result = `${humanNumbers[numbers[0]]} ${hundred} ${humanNumbers[numbers[1] + numbers[2]]}`;
      } else if  (numbers[2] < 1) {
        result = `${humanNumbers[numbers[0]]} ${hundred} ${hundredNumbers[numbers[1]]}`;
      } else {
        result = `${humanNumbers[numbers[0]]} ${hundred} ${hundredNumbers[numbers[1]]} ${humanNumbers[numbers[2]]}`;
      }
    }

    return result;
  }




