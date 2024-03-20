#! /usr/bin/env node



import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter Your firts number", type: "number", name: "firtsNumber" },
  { message: "Enter Your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

// CONDITIONAL STATEMENT


if (answer.operator === "ADDITION"){
    console.log(answer.firtsNumber + answer.secondNumber);
}else if(answer.operator === "SUBTRACTION"){
    console.log(answer.firtsNumber - answer.secondNumber);
}else if(answer.operator === "MULTIPLICATION"){
    console.log(answer.firtsNumber * answer.secondNumber);
}else if (answer.operator === "DIVISION"){
    console.log(answer.firtsNumber / answer.secondNumber);
}
else {"please select the correct number"};