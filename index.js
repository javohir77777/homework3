// 1
let a = 5;
let b = 7;

function sum(a, b) {
  sum = a + b;
  console.log(sum);
}

sum(a, b); 

a = 10;
b = 4;

sum(a, b); 


// 2
let n = +prompt( 'n', '' );

function fib(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log( fib( n ) );