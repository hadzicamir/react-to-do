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

  const clearHandler = () => {
    setTodos([]);
  }

  const deleteHandler = (item) => {
    setTodos(prevState => prevState.filter((_, i) => 
    i !== item
    ))
  }

    const [isCross, setCross] = useState(false);
    const toggle = (i) => {
      if(!isCross) setCross(i);
                else setCross(false);
    };
  
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
      <input value={inputValue} onChange={changeHandler} type='text' />
      <button type='submit'>Submit</button>
      <button type='reset' onClick={clearHandler}>Clear List</button>
      </form>
      <ul>{todos.map((todo, i) => <li 
      key={i}
      className={isCross === i ? "cross" : ""}
      > 
        {todo}
        {<button onClick={() => deleteHandler(i)}>X</button>}
        {<button 
        onClick={() => toggle(i)}
        >
          done</button>}
        </li>)}
        </ul>
    </div>
  )
}
