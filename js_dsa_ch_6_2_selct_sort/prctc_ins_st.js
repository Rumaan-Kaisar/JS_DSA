function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Insted of values we store only the index of lowest value
        var lowest = i;
        // lowest = arr[(arr.length)-i]
        for (var j = i + 1; j < arr.length; j++) {
            // console.log(arr, arr[j], arr[j+1]);
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }

        //   swapping the smallest value with the initial value arr[i]
        console.log(i, lowest);
        console.log("#############");
        console.log(arr);
        console.log("swapping in arr");
        if (i != lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(arr);
            console.log("#############");
        }

    }
    return arr;
}
