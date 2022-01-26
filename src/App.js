import React, {useState} from "react";
import "./style.css";

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(inputValue === ''){
    return false;
    }
    setTodos(prevState => ([
      ...prevState, inputValue
    ]));
    setInputValue('');
  }
  console.log(todos);

  const clearHandler = () => {
    setTodos([]);
  }

  const deleteHandler = (item) => {
    setTodos(prevState => prevState.filter((_, i) => 
    i !== item
    ))
  }
  
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
      <input value={inputValue} onChange={changeHandler} type='text' />
      <button type='submit'>Submit</button>
      <button type='reset' onClick={clearHandler}>Clear List</button>
      </form>
      <ul>{todos.map((todo, i) => <li key={i}>
        {todo}
        {<button onClick={() => deleteHandler(i)}>X</button>}
        {<button>edit</button>}
        </li>)}
        </ul>
    </div>
  )
}
