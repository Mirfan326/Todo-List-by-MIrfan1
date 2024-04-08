//ToDo App list in TypeScript by MIrfan 
// packages install: tsc --init and npm init -y and 
//  npm i @types/node -D then set "type ",module, and es2022, module, 
//  set nodenext and module resolution: nodenext then 
//  finally insatall inquirer npm install inquirer then npm fund run command.
import inquirer from "inquirer";
// user variable 
let todo = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: 'add todoitem in listing'
        },
        {
            name: "addMore",
            type: "list",
            choices: ["yes", "No"]
        }
    ]);
    // output of program
    const { Todoitem, addMore } = input;
    todo.push(Todoitem);
    if (addMore == "No") {
        console.log("Todolist:");
        // add more item 
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        // exit loop
        break;
    }
}
