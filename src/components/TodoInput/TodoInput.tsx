import { useTodoInputStyles } from "./TodoInput.styles"


export default function TodoInput() {
    const classes = useTodoInputStyles();
  return (
    <div className={classes.box}>
        <input placeholder="Create a new todo .."
        className={classes.input}
        />
    </div>
  )
}
