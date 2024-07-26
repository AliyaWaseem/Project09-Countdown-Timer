#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
// //Title Description
console.log(chalk.bold.magentaBright.italic("\n \t\t Countdown-Timer-Application"));
console.log(chalk.yellowBright("*".repeat(50)));
// Get user input for the number of seconds
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: chalk.bold.redBright("Please enter amount of second:"),
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number!";
        }
        else if (input > 60) {
            return "seconds must be in 60!";
        }
        else {
            return true;
        }
    }
});
// Convert the input from string to number and set the countdown timer with the entered seconds.
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const IntervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(IntervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.greenBright(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }, 1000);
}
startTime(input);
// const date = new Date();
// console.log(chalk.red(date));
// console.log(chalk.green("initialtime" + intervalTime));
