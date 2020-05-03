import React from "react";
import "./App.css";

const Todo = ({ text, completed, completeTodo, removeTodo, index }) => (
  <div
    className="todo"
    style={{ textDecoration: completed ? "line-through" : "" }}
  >
    <p>{text}</p>
    <div className="">
      <button
        onClick={() => {
          completeTodo(index);
        }}
      >
        complete
      </button>
      <button
        onClick={() => {
          removeTodo(index);
        }}
      >
        remove
      </button>
    </div>
  </div>
);

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="add..."
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      text: "todo  1",
      completed: true,
    },
    {
      text: "todo  2",
      completed: false,
    },
    {
      text: "todo  3",
      completed: false,
    },
  ]);

  const addTodo = (text) => {
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  const completeTodo = (index) => {
    const newToDos = [...todos];
    newToDos[index].completed = !newToDos[index].completed;
    setTodos(newToDos);
  };

  const removeTodo = (index) => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            {...todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
