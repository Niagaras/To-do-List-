import { useTodoTaskStyles } from './TodoTask.styles';

export default function TodoTask() {
    const classes = useTodoTaskStyles();
  return (
    <div className={classes.box}>
        <div style={{display: 'flex'}}>
            <div className={classes.radio}>
                <input type="checkbox" />
            </div>
            <div>
                Read for 1 hour
            </div>            
        </div>
        <div>
            x
        </div>        
    </div>
  )
}
