// OPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  var no_Swap;
  for(var i = arr.length; i > 0; i--){
    no_Swap = true;
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        // Swap !
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp; 
        no_Swap = false;        
      }
    }
    console.log("One pass Complete");
    // If no swap happens inside nested-loop, outer loop breaks.
    if(no_Swap) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);