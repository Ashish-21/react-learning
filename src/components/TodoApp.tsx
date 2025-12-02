import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type FilterType = "All" | "Completed" | "Pending";

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");

  const handleInputChange = (event) => {
    setInput(event?.target?.value ?? "");
  };

  const handleAddTodo = () => {
    if (input) {
      const todo: Todo = {
        id: new Date().getMilliseconds()?.toString() ?? "",
        text: input ?? "",
        completed: false,
      };
      const tempTodos = [...todos, todo];
      setTodos(tempTodos);
      setInput("");
    }
  };

  const handleDeleteTodo = (id: string) => {
    const tempTodos = todos?.filter((todo) => todo?.id !== id);
    setTodos(tempTodos);
  };

  const handleFilter = (filter: string) => {
    setFilter(filter as FilterType);
  };

  const handleStatusChange = (id: string) => {
    setTodos(
      todos?.map((todo) => {
        return todo?.id === id
          ? { ...todo, completed: !todo?.completed }
          : todo;
      })
    );
  };

  const filterTodos = todos?.filter((todo) => {
    if (filter === "Completed") return todo?.completed;
    if (filter === "Pending") return !todo?.completed;
    return true;
  });

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <p>Filters</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button onClick={() => handleFilter("All")}>All</button>
          <button onClick={() => handleFilter("Completed")}>Completed</button>
          <button onClick={() => handleFilter("Pending")}>Pending</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "20px",
        }}
      >
        <input
          value={input}
          onChange={(event) => handleInputChange(event)}
        ></input>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        {filterTodos?.map((todo) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginBottom: "20px",
              }}
              key={todo?.id}
            >
              <input
                type="checkbox"
                onChange={() => handleStatusChange(todo?.id ?? "")}
              />
              {todo?.text}
              <button onClick={() => handleDeleteTodo(todo?.id ?? "")}>
                Delete Todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoApp;
