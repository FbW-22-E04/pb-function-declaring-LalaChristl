// 1. 1. Multiply - Function Declaration

function multNum(a, b) {
  console.log(a * b);
}
multNum(8, 6);

console.log("-----------------------------------------");

// 2. Multiply - Function Declarations as Values


let total = function(a, b) {
  console.log(a * b); 
};

total(7, 6)

console.log("-----------------------------------------");

// 3. Multiply - Arrow Function

const multNumArrow = (a, b) => {
  console.log(a * b);
};
multNumArrow(5, 7);

console.log("-----------------------------------------");

// 4. Declarations

function calcRemainder1(x, y){
    console.log(x % y);
}
calcRemainder1(7, 6)

function calcRemainder1(x, y){
    console.log(x % y);
}
calcRemainder1(8, 5);

function calcRemainder1(x, y){
    console.log(x % y);
}
calcRemainder1(3, 3)