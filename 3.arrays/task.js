function compareArrays(arr1, arr2) {

  function compareValue(_, index) {
    return arr1[index] === arr2[index]
  }

  let result = arr1.every(compareValue);
  return result;
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]))
console.log(compareArrays([1, 2, 3], [1, 2, 2]))

function advancedFilter(arr) {

  function moreThanZero(value) {
    return value > 0;
  }

  function multiolesOf3(value) {
    return value % 3 === 0;
  }

  function multiplyBy10(value) {
    return value * 10;
  }

  return arr.filter(moreThanZero).filter(multiolesOf3).map(multiplyBy10);

}
console.log(advancedFilter([1, 2, 3, 6]));




