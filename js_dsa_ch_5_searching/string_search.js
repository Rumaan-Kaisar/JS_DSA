function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")

// Practiced version
function naive_str_srch(str_lng, str_shrt){
    var count = 0;
    for(var i = 0; i < str_lng.length; i++){
        for(var j =0; j< str_shrt.length; j++){
            if(str_shrt[j]!== str_lng[i+j]) break;
            if(j === (str_shrt.length -1)) count++;
        }
    }
    return count;
}
naive_str_srch("lorie loled", "lol")


// Walkthrough version
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            console.log(short[j], long[i+j])
            if(short[j] !== long[i+j]){
                console.log('BREAK!');
                break;
            } 
            if(j === short.length - 1){
                console.log("FOUND ONE!");
                count++;
            }
        }
    }
    return count;
}
naiveSearch("lorie loled", "lol")