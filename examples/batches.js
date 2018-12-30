function batches(recipe, available) {
  // for each ingredient in recipe:
  //  1. check if it exists in available
  //  2. divide available qty by recipe qty and round down
  //  3. record divide result in new object or array `canMake`
  //  4. the min value in `canMake` is the answer
  let canMake = [];
  Object.keys(recipe).forEach(recipeKey => {
    let availableQty = available[recipeKey];
    canMake.push(
      availableQty ? Math.floor(availableQty / recipe[recipeKey]) : 0
    );
  });
  return Math.min(...canMake);
}

console.log(
  batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
);
console.log(
  batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  )
);
console.log(
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
);
console.log(
  batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )
);
