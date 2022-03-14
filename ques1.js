//compare function to sort the array with respect to count

function compareWithRespectToCount(firstEle, secondEle) {
  return secondEle.count - firstEle.count;
}

//function to get all stake holders for different stocks
function getStakeHolders(portfolio) {
  let stakeHolders = [];

  // USED FOR LOOP HERE BUT I ALSO COULD'VE USED .MAP() FUNCTION TO TRAVERSE OVER THE ARRAY.
  for (let stakeInd = 0; stakeInd < portfolio.length; stakeInd++) {
    //this finds if the stock I looking at right now is already present inside my stakeholders array.
    let stake = stakeHolders.find(currHolder => {
      return (
        currHolder["stock"] &&
        currHolder["stock"] == portfolio[stakeInd]["stock"]
      );
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

  return stakeHolders.sort(compareWithRespectToCount);
  //   return stakeHolders;
}

console.log(
  getStakeHolders([
    { name: "Mark", stock: "FB" },
    { name: "Steve", stock: "AAPL" },
    { name: "Tim", stock: "AAPL" },
    { name: "Steve", stock: "MSFT" },
    { name: "Bill", stock: "MSFT" },
    { name: "Bill", stock: "AAPL" },
  ])
);
