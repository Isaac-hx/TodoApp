import "./Todo.css";
import Todolist from "../todo-list/Todo-list.js";
import Todocreate from "../todo-create/Todo-create.js";
import { useState } from "react";

const Todo = () => {
	const [getTodos, setTodos] = useState([
		{ id: 1, title: "eat" },
		{ id: 2, title: "sleep" },
		{ id: 3, title: "code" }
	]);

	const eventCreateTodo = (todo) => {
		setTodos(getTodos.concat(todo));
	};
	return (
		<div>
			<h3>Todo list</h3>
			<Todocreate onCreateTodo={eventCreateTodo} />
			<Todolist dataTodos={getTodos} />
		</div>
	);
};

export default Todo;
