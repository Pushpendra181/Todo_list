
import { useState } from 'react';
import './App.css';
import TodoContainerComponent from './Components/TodoContainerComponent/TodoContainerComponent';
import TodoTitleComponent from './Components/TodoTitleComponent/TodoTitleComponent';

function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
    <TodoTitleComponent todoList= {todoList} setTodoList= {setTodoList}/>
    <TodoContainerComponent todoList= {todoList} setTodoList= {setTodoList}/>
    </div>
  );
}

export default App;
