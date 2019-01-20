function negativeSum(...args) {
  // return args.reduce((arg, total) => {
  return args.reduce((total, arg) => {
    return total - arg;
  }, 0);
}

console.log(negativeSum(1, 5, 10)); // expect -16, actual 6
