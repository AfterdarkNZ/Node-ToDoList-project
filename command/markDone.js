import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todos-cli" });

export default function markDone({ tasks }) {
  let todosList = conf.get("todo-list");
  if (todosList) {
    //loop over the todo list tasks
    todosList = todosList.map((task, index) => {
      //check if the user specificed the tasks to mark done
      if (tasks) {
        //check if this task is one of the tasks the user specified, adjusting for 1-based index
        if (tasks.indexOf((index + 1).toString()) !== -1) {
          //mark only specified tasks by user as done
          task.done = true;
        }
      } else {
        //if the user didn't specify tasks, mark all as done
        task.done = true;
      }
      return task;
    });
    conf.set("todo-list", todosList);
  }
  //show the user a message
  console.log(chalk.green.bold("Tasks have been marked successfully as done!"));
}
