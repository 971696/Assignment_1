const prompt = require("prompt-sync")();

function checkNumberSign() {
  const num = parseFloat(prompt("Enter a number: "));
  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

function calculateFinalGrade() {
  const grade = parseFloat(prompt("Enter the student's grade (0-100): "));
  let finalGrade;
  if (grade >= 90) {
    finalGrade = "A";
  } else if (grade >= 80) {
    finalGrade = "B";
  } else if (grade >= 70) {
    finalGrade = "C";
  } else if (grade >= 60) {
    finalGrade = "D";
  } else {
    finalGrade = "F";
  }
  console.log(`The final grade is ${finalGrade}.`);
}

function checkAge() {
  const age = parseInt(prompt("Enter your age: "));
  if (age < 18) {
    console.log("You're a minor.");
  } else {
    console.log("You're an adult.");
  }
}

function checkLeapYear() {
  const year = parseInt(prompt("Enter a year: "));
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

function checkMarriageEligibility() {
  const gender = prompt("Enter gender (male/female): ").toLowerCase();
  const age = parseInt(prompt("Enter age: "));
  if ((gender === "male" && age >= 21) || (gender === "female" && age >= 18)) {
    console.log("You are eligible for marriage.");
  } else {
    console.log("You are not eligible for marriage.");
  }
}

function checkDrivingEligibility() {
  const age = parseInt(prompt("Enter age: "));
  if (age >= 16) {
    const passedTest = prompt(
      "Have you passed the written test? (yes/no): "
    ).toLowerCase();
    if (passedTest === "yes") {
      console.log("You are eligible for a driver's license.");
    } else {
      console.log("You are not eligible for a driver's license.");
    }
  } else {
    console.log("You are not eligible for a driver's license.");
  }
}

function checkFreeDelivery() {
  const orderTotal = parseFloat(prompt("Enter order total: "));
  if (orderTotal >= 50) {
    console.log("You are eligible for free delivery.");
  } else {
    const isLoyaltyMember = prompt(
      "Are you a loyalty member? (yes/no): "
    ).toLowerCase();
    if (isLoyaltyMember === "yes") {
      console.log("You are eligible for free delivery.");
    } else {
      const distance = parseFloat(
        prompt("Enter distance from restaurant (in miles): ")
      );
      if (distance < 5) {
        console.log("You are eligible for free delivery.");
      } else {
        console.log("Delivery is not free.");
      }
    }
  }
}

function main() {
  checkNumberSign();
  calculateFinalGrade();
  checkAge();
  checkLeapYear();
  checkMarriageEligibility();
  checkDrivingEligibility();
  checkFreeDelivery();
}

main();
