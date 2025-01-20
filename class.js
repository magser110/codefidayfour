//ex 1
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(null)); //false

// ex 2
function votingAge(age) {
  if (age >= 18) {
    console.log("you are old enough to vote!");
  } else {
    console.log("sorry, you're still too young :/");
  }
}
votingAge(20);
votingAge(9);

//ex 3

let initialPrice = 150;
let discountRate = 0.2;
let taxRate = 0.08;

let discount = initialPrice * discountRate;
let discountPrice = initialPrice - discount;
let taxAmount = discountPrice * taxRate;
let finalPrice = discountPrice + taxAmount;

console.log(
  `Original price = $${initialPrice}, Discount = $${discountPrice}, Tax = $${taxAmount}, $${finalPrice}`
);

//ex 4

let username = "admin";
let password = "passwordteehee";

function usernameCheck(username, password) {
  if (username === "admin" && password === "passwordteehee") {
    console.log("access granted");
  } else if (username !== "admin") {
    console.log("unknown user");
  } else {
    console.log("incorrect password");
  }
}
usernameCheck("admin", "passwordteehee");
usernameCheck("hi", "password");
usernameCheck("admin", "password");

// 5
let hasLicense = true;

function drivingAge(age) {
  if (age >= 18 && hasLicense) {
    console.log("you can drive");
  } else if (age >= 18 && !hasLicense) {
    console.log("you need a license to drive");
  } else console.log("you're not old enough to drive");
}

drivingAge(12);
drivingAge(23);
drivingAge(2);

//6
let isWeekend = true;
let isHoliday = true;

if (isWeekend && isHoliday) {
  console.log("you can relax today");
} else {
  console.log("it's a workday");
}

// ex 7
// let name1 = prompt("enter your name");

// console.log("hello, " + name1 + " magwelcome to JavaScript Class.");

// ex 8

function square(number) {
  console.log(number ** 2);
}

square(3);
square(8);

// ex 9

// let price = prompt("enter amount");

// function calculateDiscount(price) {
//   let discountRate2 = 0.1;

//   let discount2 = price * discountRate2;
//   let finalPrice2 = price - discount2;

//   console.log(`discount = $${discount2}, final price = $${finalPrice2}`);
// }

// calculateDiscount(price);

// ex 10
let price = prompt("enter amount");

function calculateFinalPrice (price, discountRate = 0.15, taxRate = 0.08) {
//     let discountRate = 0.15;
//     let taxRate = 0.08;

    let discount = price * discountRate;
    let discountPrice = price - discount;
    let taxAmount = price * taxRate;
    let finalPrice = discountPrice + taxAmount;

    console.log(`original price = $${price}, discount = $${discount}, tax = $${taxAmount}, final price = $${finalPrice}`);

}

calculateFinalPrice(price);
calculateFinalPrice(250, 0.2, 0.1);


// class notes
// //boolean
// console.log(2 === "2")

// // < >=  ===

// let age = 17
// if (age > 21) {
//     console.log("you can be served alcohol")
// } else {
//     console.log("you're too young")
// }

// let isWeekend = true
// let isHoliday = true

// if (isWeekend || isHoliday) {
//     console.log("you dont have to work today")
// } else {
//     console.log("you have to work")
// }

// let username = "admin"
// let password = "password123"

// if (username === "admin" && password === "password123") {
//     console.log("access granted");
// }

// function checkAge (age) {
//     if (age > 18) {
//         console.log("you are old enough to vote");

//     } else {
//         console.log("you're not old enougth to vote");

//     }
// }

// console.log(checkAge(19));
