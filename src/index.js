const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let array = [];
  let result = "";

  i = 0;
  while (i < expr.length) {
    j = i + 10;
    array.push(expr.slice(i, j));
    i = i + 10;
  }

  array.forEach((item) => {
    let currentArr = [];

    let i = 0;
    while (i < item.length) {
      j = i + 2;
      currentArr.push(item.slice(i, j));
      i = i + 2;
    }

    currentArr.map((elem, i) => {
      switch (elem) {
        case "11":
          currentArr[i] = "-";
          break;
        case "10":
          currentArr[i] = ".";
          break;
        case "00":
          currentArr[i] = "";
          break;
        case "**":
          currentArr[i] = "*";
          break;
      }
    });

    let chars = [];
    chars.push(currentArr.join(""));

    chars.forEach((item) => {
      if (item === "*****") {
        result += " ";
      }

      for (let key in MORSE_TABLE) {
        if (key === item) {
          result += MORSE_TABLE[key];
        }
      }
    });
  });

  return result;
}
module.exports = {
  decode,
};
