import { Send } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { ItemType } from "../models/List";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const inputContainerStyle = {
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "16px",
};

const inputField = {
	flexGrow: "1",
};

const submitButton = {
	width: "40px",
	height: "40px",
	margin: "4px",
	padding: "32px",
};

interface InputContainerProps {
	changeTab(e: SyntheticEvent | null, index: number): void;
}

function InputContainer(props: InputContainerProps) {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (value == "") return;
		const todoItem: ItemType = {
			id: crypto.randomUUID(),
			title: value,
			createdOn: Date.now().toString(),
			completed: false,
		};
		dispatch(addTodo(todoItem));
		setValue("");
		props.changeTab(null, 0);
	};
	return (
		<Box sx={inputContainerStyle}>
			<TextField
				multiline
				sx={inputField}
				rows={2}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Write note here..."
			/>
			<IconButton sx={submitButton} type="submit" onClick={handleSubmit}>
				<Send />
			</IconButton>
		</Box>
	);
}

export default InputContainer;
