import TodoTask from "../TodoTask/TodoTask";
import { useTodoListStyles } from "./TodoList.styles"


export default function TodoList() {
    const classes = useTodoListStyles();
  return (
    <div className={classes.list}>
        <TodoTask />
        <TodoTask />
        <TodoTask />
        <TodoTask />        
    </div>

  )
}
