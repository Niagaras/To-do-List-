import { createUseStyles } from "react-jss";

export const useTodoInputStyles = createUseStyles({
    input: {
        width: '100%',
        outline: 'none',
        border: 'none',
        fontSize: 16
    },
    box: {
        background: '#fff',
        padding: '16px 20px',
        borderRadius: 6,
        marginBottom: 12
    }
})