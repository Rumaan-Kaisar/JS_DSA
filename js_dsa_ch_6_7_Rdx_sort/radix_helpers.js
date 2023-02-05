function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/* Radix sort main function */
function radixSort(arr){
  let maxDigitCount = mostDigits(arr);
  for(let k = 0; k < maxDigitCount; k++){
      let digitBuckets = Array.from({length: 10}, () => []); /* creates the array of 10 sub-arrays */
      for(let i = 0; i < arr.length; i++){
          let digit = getDigit(arr[i],k);
          digitBuckets[digit].push(arr[i]); /* putting in the corresponding bucket */
      }
      console.log(digitBuckets);
      // We could use For-loop and push the subarrays instead of concat()
      arr = [].concat(...digitBuckets); /* concatenating the sub-arrays */
      // []. concat ( [ [1], [2], [3] ]) /* returns only array of array */
      // []. concat (... [ [1], [2], [3] ])  /* returns a single-array only concatenatig elements of subarrays */
      console.log(arr);
  }
  return arr;
}
console.log("applying radix sort : "+radixSort([23,345,5467,12,2345,9852]));





/* 
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
} 
*/





