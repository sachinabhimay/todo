import { Box, ListItem, Typography } from "@mui/material";
import { ItemType } from "../models/List";
import { Checkbox } from "@mui/material";

interface TodoListItemProps extends ItemType {
	key: string;
	onChange(id: string): void;
}

const listItemContainerStyle = {
	display: "flex",
	alignItem: "top",
	width: "100%",
	border: "1px solid black",
	borderRadius: "4px",
	background: "#fff",
	padding: "2%",
};

const textStyle = {
	wordWrap: "anywhere",
};

const checkBoxStyle = {
	width: "40px",
	height: "40px",
};

function TodoListItem(props: TodoListItemProps) {
	const createdOnDate = new Date(Number(props.createdOn)).toUTCString();
	const completedDate =
		props.completedOn && new Date(Number(props.completedOn)).toUTCString();
	return (
		<ListItem>
			<Box sx={listItemContainerStyle}>
				<Checkbox
					style={checkBoxStyle}
					checked={props.completed}
					onChange={() => props.onChange(props.id)}
				/>
				<div>
					<Typography sx={textStyle} variant="h4">
						{props.title}
					</Typography>
					<div>
						<Typography variant="body2">
							Created on: {createdOnDate}
						</Typography>
						{props.completedOn && (
							<Typography variant="body2">
								Completed on: {completedDate}
							</Typography>
						)}
					</div>
				</div>
			</Box>
		</ListItem>
	);
}

export default TodoListItem;
