import './App.css'
import Header from './components/Header/Header'
import {useAppStyles} from './App.styles'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
function App() {

  const classes = useAppStyles();

  return (
    <>
    <div>
      <div className={` ${classes.font} ${classes.container}`}>
        <Header />
        <TodoInput />
        <TodoList />
      </div>      
    </div>

    </>
  )
}

export default App
