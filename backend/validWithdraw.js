module.exports = {
  ValidNote: (withdraw) => {
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;
    if (withdraw !== 0) {
      while (withdraw >= 100) {
        contador100++;
        withdraw -= 100;
      }
      while (withdraw >= 50) {
        contador50++;
        withdraw -= 50;
      }
      while (withdraw >= 20) {
        contador20++;
        withdraw -= 20;
      }
      while (withdraw >= 10) {
        contador10++;
        withdraw -= 10;
      }
      while (withdraw >= 5) {
        contador5++;
        withdraw -= 5;
      }
      while (withdraw >= 2) {
        contador2++;
        withdraw -= 2;
      }
    }
    return [
      { note100: contador100 },
      { note50: contador50 },
      { note20: contador20 },
      { note10: contador10 },
      { note5: contador5 },
      { note2: contador2 },
    ];
  },
};
