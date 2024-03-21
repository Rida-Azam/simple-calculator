#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number:", type: "number", name: "firstNumber" },
  { message: "Enter Second Number:", type: "number", name: "secondNumber" },
  {
    message: "Select any one operator to perform operation:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional Statement

if (answer.operator === "Addition") {
  let add = answer.firstNumber + answer.secondNumber;
  console.log(`Your Value is: ${add}`);
} else if (answer.operator === "Subtraction") {
  let sub = answer.firstNumber - answer.secondNumber;
  console.log(`Your Value is: ${sub}`);
} else if (answer.operator === "Multiplication") {
  let mul = answer.firstNumber * answer.secondNumber;
  console.log(`Your Value is: ${mul}`);
} else if (answer.operator === "Division") {
  let div = answer.firstNumber / answer.secondNumber;
  console.log(`Your Value is: ${div}`);
}else{
    console.log("Please select valid operator.")
}
