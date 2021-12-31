import "./Todo-list.css";

const Todolist = (props) => {
	return (
		<ul>
			{props.dataTodos.map((todo) => {
				return <li key={todo.id}>{todo.title}</li>;
			})}
		</ul>
	);
};

export default Todolist;
