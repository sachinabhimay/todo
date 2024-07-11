import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { completedListSelector, markIncomplete } from "../slices/todoSlice";
import TodoListItem from "./TodoListItem";

function CompletedList() {
	const completedList = useSelector(completedListSelector);
	const dispatch = useDispatch();

	const handleOnChangeStatus = (id: string) => {
		const todo = completedList.filter((item) => item.id == id)[0];
		dispatch(markIncomplete(todo));
	};
	return (
		<List>
			{completedList.map((item) => (
				<TodoListItem
					key={item.id}
					{...item}
					onChange={handleOnChangeStatus}
				/>
			))}
		</List>
	);
}

export default CompletedList;
