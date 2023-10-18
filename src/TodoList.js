import React from "react";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos, showCompleted, onToggleComplete, onEditTodo, onDeleteTodo }) => {
  const filteredTodos = showCompleted ? todos.filter((todo) => todo.completed) : todos;

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
