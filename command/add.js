import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todos-cli" });

export default function add(task) {
  //get the current todo-list
  let todosList = conf.get("todo-list");
  if (!todosList) {
    //default value for todos-list
    todosList = [];
  }
  //push the new task to the todos-list
  todosList.push({
    text: task,
    done: false,
  });

  //set todos-list in conf
  conf.set("todo-list", todosList);

  //display message to user
  console.log(chalk.green.bold("task has been added successfully!"));
}
