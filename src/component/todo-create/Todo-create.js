import "./Todo-create.css";
import { useState } from "react";

const Todocreate = (props) => {
	const [getInputTodo, setInputTodo] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const newTodo = { id: 27, title: getInputTodo };
		props.onCreateTodo(newTodo);
		setInputTodo("");
	};

	const handleInputTodo = (event) => {
		setInputTodo(event.target.value);
		console.log(getInputTodo);
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" value={getInputTodo} onChange={handleInputTodo} />
			<button type="submit">Add</button>
		</form>
	);
};

export default Todocreate;
