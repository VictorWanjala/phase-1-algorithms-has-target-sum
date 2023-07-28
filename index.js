function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++){
   for (let a=i+1; a<array.length;a++){
    if(array[i]+array[a]===target){
      return true;
    }
   }
  }
  return false
}
let arrayNum = [4,6,5,3,5,8,2]
let targetNum = 10
const result = hasTargetSum(arrayNum, targetNum)
console.log(result)



/* 
  Write the Big O time complexity of your function here
*/

/* 
Add your pseudocode here
  function hasTargetSum(array, target):
  Loop through each element in the array
    for i = 0 to array.length:
        Loop through the subsequent elements to find pairs with the current element
        for a = i + 1 to array.length:
            Check if the sum of the current pair equals the targetNum
            if array[i] + array[a] == targetNum:
                Return the pair of numbers that add up to the targetNum
                return [array[i], array[a]]
*/

/*
  Add written explanation of your solution here

hasTargetSum function takes an array of numbers and a target number as input.
It searches for pairs of numbers from the array whose sum equals the target number.
The function uses two nested loops to check all possible combinations of pairs.
When a pair with the target sum is found, it returns an array containing those two numbers.
Array and target number will be defined outside the function.
The function is called with these values to find a pair whose sum is equal to the target number.
The result (the pair of numbers) is logged to the console.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 6, 4, 8, 2], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 3, 6, 25], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5,1], 4));
}

module.exports = hasTargetSum;
