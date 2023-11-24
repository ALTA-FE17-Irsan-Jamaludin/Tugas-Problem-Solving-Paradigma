const dragonOfLoowater = (dragonHeads: number[], knightHeights: number[]) => {
  let gold: number = 0;
  for (let i = 0; i < dragonHeads.length; i++) {
    let kalah = false;
    for (let j = 0; j < knightHeights.length; j++) {
      if (dragonHeads[i] <= knightHeights[j]) {
        gold += knightHeights[j];
        kalah = true;
        break;
      }
    }
    if (!kalah) {
      return "Knight Fall";
    }
  }
  return gold;
};

console.log(dragonOfLoowater([4, 5], [4, 7, 14])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // Knight Fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // Knight Fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); //10
