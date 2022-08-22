// homework 1
function oddExport(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddExport(5));
// homework 2

var set1 = new Set([1, 2, 1]);
console.log(set1);

// homework 3

var map1 = [1, 2, 3, 4, 5, 2];
console.log(map1.map());