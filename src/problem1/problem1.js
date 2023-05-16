var sum_to_n_a = function(n) {
    // simple for loop with an initial count value of 1, then iterate through all the values from 1 to n, adding it to count
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    return count;
};

var sum_to_n_b = function(n) {
    // using mathematical formula for sum of numbers
    return (n * (n + 1)) / 2;
};

var sum_to_n_c = function(n) {
    // using recursion, where base case is where n = 0
    if (n === 0) {
        return 0;
    }
    else {
        return n + sum_to_n_c(n - 1);
    }
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));