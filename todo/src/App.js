import React, { useReducer, useState } from 'react';
import { reducer } from "./reducers/reducer";
// import './App.css';


const App = () => {
  const [{todos}, dispatch] = useReducer(reducer, { todos: []  });
const [text, setText] = useState();
  return (
    <div className="App">
      <header className="App-header"> Todo List
      </header>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({ type: "add-todo", text});
        setText("");
      }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((t, idx) => (
        <div 
        key={t.text} 
        onClick={() => dispatch({ type: 'toggle-todo', idx})} style={{
          textDecoration: t.completed ? 'line-through' : ""
        }}>{t.text}</div>
      ))}
    </div>
  );
};

export default App;
