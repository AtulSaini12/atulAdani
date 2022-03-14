function getStakeHolders(portfolio) {
  let stakeHolders = [];

  for (let stakeInd = 0; stakeInd < portfolio.length; stakeInd++) {
    let stake = stakeHolders.find(currHolder => {
      return currHolder.stock && currHolder.stock == portfolio[stakeInd].stock;
    });
    if (stake === undefined) {
      let names = [];
      names.push(portfolio[stakeInd].name);
      stakeHolders.push({
        stock: portfolio[stakeInd].stock,
        name: names,
        count: 1,
      });
    } else {
      stake["name"].push(portfolio[stakeInd].name);
      stake["count"] += 1;
    }
  }
  return stakeHolders;
}
