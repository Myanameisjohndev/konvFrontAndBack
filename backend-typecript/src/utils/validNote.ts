export const ValidNote = (withdraw: number) => {
  let contador100 = 0;
  let contador50 = 0;
  let contador20 = 0;
  let contador10 = 0;
  let contador5 = 0;
  let contador2 = 0;
  let localValue = withdraw;
  if (localValue !== 0) {
    while (localValue >= 100) {
      contador100 += 1;
      localValue -= 100;
    }
    while (localValue >= 50) {
      contador50 += 1;
      localValue -= 50;
    }
    while (localValue >= 20) {
      contador20 += 1;
      localValue -= 20;
    }
    while (localValue >= 10) {
      contador10 += 1;
      localValue -= 10;
    }
    while (localValue >= 5) {
      contador5 += 1;
      localValue -= 5;
    }
    while (localValue >= 2) {
      contador2 += 1;
      localValue -= 2;
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
};
