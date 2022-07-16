function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!");
  }



function printAllPairs(n) {
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
    console.log(i, j);
    }
}
}

function logAtleast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
  	}
