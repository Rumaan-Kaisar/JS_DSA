function countUniqueValues(arr){
    var i = 0;
    
    if(arr.length === 0) return 0;
    
    for(var j=1; j< arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;            /* increment the first pointers index */
            arr[i]=arr[j]; /* Interchange the values */
        }
    }
    
    return i+1; /*Counted uniqie values*/
}

/*Works with sorted array*/
countUniqueValues([0, 0, 1, 2, 3, 3, 3, 4])

