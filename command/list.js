import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todos-cli" });

export default function list() {
  const todoList = conf.get("todo-list");
  if (todoList && todoList.length) {
    //user has tasks in todoList
    console.log(
      chalk.blue.bold(
        "Tasks in green are done. Tasks in yellow are still not done."
      )
    );
    todoList.forEach((task, index) => {
      if (task.done) {
        //adjusting for 1-based index
        console.log(chalk.greenBright(`${index + 1}. ${task.text}`));
      } else {
        console.log(chalk.yellowBright(`${index + 1}. ${task.text}`));
      }
    });
  } else {
    //user does not have tasks in todoList
    console.log(chalk.red.bold("You don't have any tasks yet."));
  }
}
