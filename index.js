let _ = require('lodash');
let arr = [0, 0, 0, 0];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("");

_.fill(arr, 5, 0, arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
