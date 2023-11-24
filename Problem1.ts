const simpleEquations = (a: number, b: number, c: number) => {
  for (let x = -1000; x <= 1000; x++) {
    for (let y = -10000; y <= 1000; y++) {
      let z = a - x - y;
      if (x + y + z === a && x * y * z === b && x ** 2 + y ** 2 + z ** 2 === c) {
        return `${x} ${y} ${z}`;
      }
    }
  }

  return `No Solutions`;
};

console.log(simpleEquations(6, 6, 14));
