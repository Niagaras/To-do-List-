import { useAddTodo } from "../../services/fetchTodo";
import TodoTask from "../TodoTask/TodoTask";
import { useTodoListStyles } from "./TodoList.styles"
import type { Todo } from "../../models";

export default function TodoList() {
    const classes = useTodoListStyles();
    const {isPending, isError, data} = useAddTodo();
    if(isPending) return <p>Loading...</p>;
    if(isError) return <p>Something went wrong</p>;
  return (
    <div className={classes.list}>
        {
            data?.map((item: Todo) =>
               item.completed ?  (<TodoTask key={item.id} todo= {item}/>  
            ) : null
        )
        }  
                {
            data?.map((item: Todo) =>
               !item.completed ?  (<TodoTask key={item.id} todo= {item}/>  
            ) : null
        )
        }  
    </div>

  )
}
