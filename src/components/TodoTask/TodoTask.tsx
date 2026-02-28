import type { Todo } from '../../models';
import { useTodoTaskStyles } from './TodoTask.styles';

interface Props {
    todo : Todo;
}

export default function TodoTask({todo} : Props) {
    const classes = useTodoTaskStyles();
  return (
    <div className={classes.box} key={todo.id}>
        <div style={{display: 'flex'}}>
            <div className={classes.radio}>
                <input type="checkbox"  checked={todo.completed}/>
            </div>
            <div>
               {todo.todo}
            </div>            
        </div>
        <div>
            x
        </div>        
    </div>
  )
}
