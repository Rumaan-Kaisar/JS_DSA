function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)

/* sorted array */
USA_states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Federated States of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northe rn Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
console.log(USA_states);

/* unsorted array */
rand_names = ["tommy", "monkeygurl", "dineshl23", "dineshl234", "patrick33", "cats4lyfe", "timothy", "tom", "tommyl", "tomm_y", "tom_my","i_hate_cats", "pickle_luvr", "pickle_hater", "dog_guy", "q", "juan987"]
console.log(rand_names);


function is_in_arr(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]===val) return i;
        // else return -1; // it cause error, do not use this
    }
    return -1;
}

console.log(is_in_arr(USA_states, "Idaho"));
console.log(is_in_arr(rand_names, "tom"));