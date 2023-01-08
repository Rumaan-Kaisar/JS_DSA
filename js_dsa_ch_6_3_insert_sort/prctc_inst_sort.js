


function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

[1, 2, 9, 76, 4]

function insertSort(arr){
    var curRent;
    for(var i = 1; i< arr.length; i++){
        curRent = arr[i];
        for(var j = i-1; (j>=0) && (arr[j] > curRent); j--){
            // reversed direction checking
            // (arr[j] > curRent); curRent is compared to left elements one by one "from right to left" or "big to samall"
            // (j>=0) && (arr[j] > curRent) condition is used :
            // To avoid unnecessary loops if the curRent is already in right place
                // And if the codition in the loop is true,  i.e curRent is less then the other values in the left
                // this loop runs and sift the elements by increasing their index
            arr[j+1] = arr[j];
        }
        arr[j+1] = curRent;
        // Note that : here after the nested loop j holds the last value where the loop SVGTextPositioningElement.
    }
    return arr;
}