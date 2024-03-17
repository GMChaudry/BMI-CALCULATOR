import inquirer from "inquirer";
const weightInKg = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "kindly enter your weight in KG:"
});
const heightInmeter = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "kindly enter your Height in meter:"
});
let result = weightInKg.num1 / (heightInmeter.num2 * heightInmeter.num2);
console.log(`Your BMi is ${result}`);
