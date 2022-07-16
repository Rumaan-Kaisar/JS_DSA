
// -------- Using Loop  -----------
function addUpTo(n) { 
    let total = 0; 
    for (let i = 1; i<= n; i++){
        total += i;
        }
    return total;
}

// console.log(addUpTo(6))

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);
// `` are not single quotes ''



// Using mathematical formula
function addUpTo_frmula(n) { 
    return n*(n+1)/2;
}

// console.log(addUpTo_frmula(6))

var t1 = performance.now();
addUpTo_frmula(1000000000);
var t2 = performance.now();

console.log(`Time elapsed: ${(t2-t1)*1000} Microseconds`);