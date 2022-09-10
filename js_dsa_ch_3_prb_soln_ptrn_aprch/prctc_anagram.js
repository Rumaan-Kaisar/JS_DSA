function same(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same("hoof", "fooh")



function validAnagram(first, second) {
    
    //    Cheking the length first
    if (first.length !== second.length) { 
        return false;
    }
    
    /*Creating dictionary type object with key-value pair*/
    const lookup = {};
    for (let i = 0; i < first.length; i++) { 
        let letter = first[i];
        //  if letter exists, increment,, otherwise set to 1 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    console.log(lookup);
    
    /* Check the 2nd String and compare it to first-string with frequency */
    for (let i = 0; i < second.length; i++) { 
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram 
        if (!lookup[letter]) { 
            return false;
        } else {
            /*if letter is found in the "lookup" object, then decrease the value.*/
            lookup[letter] -= 1;
        }
    }
    
    /*If all condition satisfied return true*/
    return true;
}

    
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')