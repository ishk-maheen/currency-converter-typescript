#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //American dollar
    EUR: 0.94, //Euro
    GBP: 0.81, //British pound
    CAD: 1.37, //Canadian dollar
    AUD: 1.56, //Australian dollar
    JPY: 154.56, //Japanese yen
    INR: 83.40, //Indian rupee
    CNY: 7.24, //Chinese yuan 
    HKD: 7.83, //Hong Kong Dollar
    PKR: 278.5, //Pakistani rupee
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "From which currency do you want to convert?",
        choices: ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "CNY", "HKD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "To which currency do you want to convert?",
        choices: ["USD", "EUR", "GBP", "CAD", "AUD", "JPY", "INR", "CNY", "HKD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "How much do you want to convert?"
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow(convertedAmount));
