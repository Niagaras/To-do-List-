import moon from '../../assets/icon-moon.svg'
import { useHeaderStyles } from './Header.styles'
export default function Header() {
    const classes = useHeaderStyles();
  return (
    <div className={classes.header}>
        <h1 className={classes.title}>to do</h1>
        <div>
           <img src={moon} alt="" /> 
        </div>
    </div>
  )
}
