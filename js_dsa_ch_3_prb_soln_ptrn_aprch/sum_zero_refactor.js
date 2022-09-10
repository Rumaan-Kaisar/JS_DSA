
function sumZero(arr){ 
    let left = 0;                   /*set at start of the array*/
    let right = arr.length - 1      /*set at end of the array*/
    
    while(left < right){
        let sum = arr[left] + arr[right];
        
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else{
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])