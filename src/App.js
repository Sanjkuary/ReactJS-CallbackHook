import './App.css';
import { useState, useCallback } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  }, []);

  return (
    <>
      <Header />
      <div className='counting'>
        <h2>Count: {count}</h2>
        <button className='btn' onClick={increment}>+</button>
      </div>
      
      <hr />

      <Todo todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
