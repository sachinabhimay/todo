import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { markCompleted, todoListSelector } from "../slices/todoSlice";
import TodoListItem from "./TodoListItem";

function TodoList() {
	const todoList = useSelector(todoListSelector);
	const dispatch = useDispatch();

	const handleOnChangeStatus = (id: string) => {
		const todo = todoList.filter((item) => item.id == id)[0];
		dispatch(markCompleted(todo));
	};
	return (
		<List>
			{todoList.map((item) => (
				<TodoListItem
					key={item.id}
					{...item}
					onChange={handleOnChangeStatus}
				/>
			))}
		</List>
	);
}

export default TodoList;
