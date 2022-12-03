// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);


// JS sort() with comparator
function numberCompare(num1, num2) {
  return num1 - num2;
}
[ 6, 4, 15, 10 ].sort(numberCompare)

// Sorting w.r. to length of the String
function compareBylen(str1, str2) {
  return str2.length - str1.length;
}
[ "Lassi", "Bolt", "Data Structures", "Algorithms" ] .sort(compareBylen);


// swapping
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)
// ES5
function swap(arr, idx1, idx2) {
   var temp = arr[idx1]; 
   arr[idx1] = arr[idx2]; 
   arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
[arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}


// Practiced Bubble-sort
function bubbleSort_prctc(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i-1; j++){
      var temp = arr[j];
      if (arr[j] > arr[j+1]){
        arr[j]= arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// Naieve solution of Bubble-sort
function bubbleSort_naieve(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      var temp = arr[j];
      console.log(arr, arr[j], arr[j+1]);
      // swap
      if (arr[j] > arr[j+1]){
        arr[j]= arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort_naieve([8,1,2,3,4,5,6,7]);