import { createUseStyles } from "react-jss";

export const useTodoTaskStyles = createUseStyles({
    box:{
        background: '#fff',
        padding: '16px 20px',
        marginBottom: 12,
        display: 'flex',
        alignItems: 'space-bet',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee',
    },
    radio:{
        width: 20,
        height: 20,
        transform: 'scale(1.5)', 
        cursor: 'pointer',
        marginRight: 20
    }
})