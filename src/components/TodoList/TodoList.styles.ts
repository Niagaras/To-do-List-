import { createUseStyles } from "react-jss";

export const useTodoListStyles = createUseStyles({
    list: {
        background: '#fff',
        borderRadius: 6,
        overflow: 'hidden',
  },
    btn:{
        border: 'none',
        outline: 'none',
        backgroundColor: '#fff',
        fontSize: 16,
        cursor: 'pointer'
    }
})