
Step 0 : Just write some thing

function charCount(str) { 
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}


Step 1: Generate basic idea

function charCount(str) { 
    // make object to return at end 
    // loop over string, for each character...
    // return object at end
}


Step 2: Think about the problem and add more comments

function charCount(str) { 
    // make object to return at end 
    // loop over string, for each character...
        //if the char is a key in object, add one to count 
        //if the char is not in object, add it to object and set value to 1 
    // return object at end}


Step 3: Think about the inputs and modify comments

function charCount(str) { 
    // make object to return at end 
    // loop over string, for each character...
        //if the char is a number/letter AND is a key in object, add one to count 
        //if the char is a number/letter AND not in object, add it to object and set value to 1 
    // return object at end
}


Step 4: Think about the inputs that need to avoid and modify comments

function charCount(str) { 
    // make object to return at end 
    // loop over string, for each character...
        //if the char is a number/letter AND is a key in object, add one to count 
        //if the char is a number/letter AND not in object, add it to object and set value to 1 
        //if character is something else (space, period, etc.) don't do anything 
    // return object at end
}

function charCount(str){
    // make object to return at end 
    var result = {};

    // loop over string, for each character... 
    for(var i = 0; i < str.length; i++){ 
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count 
        if(result[char] > 0) { 
            result[char]++;
        }
        //if the char is a number/letter AND not in object, add it to object and set value 
        else {
            result[char] = 1;
        };
    }
    return result;
}