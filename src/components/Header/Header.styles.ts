import {createUseStyles } from 'react-jss'

export const useHeaderStyles = createUseStyles({
    title:{
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 40,
        letterSpacing: 5
    },
    header:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 24,
    }
})