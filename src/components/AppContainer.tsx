import { SetStateAction, useState } from "react";
import "./AppContainer.scss";
import { Box, Tab, Tabs } from "@mui/material";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";
import InputContainer from "./InputContainer";

const containerStyle = {
	boxSizing: "border-box",
	border: "1px solid black",
	display: "flex",
	flexDirection: "column",
	height: "100%",
};

const todoContainerStyle = {
	flexGrow: 1,
	overflowY: "auto",
	background: "#fafafa",
};

function AppContainer() {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (
		event: React.SyntheticEvent,
		newValue: SetStateAction<number>
	) => {
		console.log(newValue);
		setTabIndex(newValue);
	};

	const getContainer = (index: number) => {
		switch (index) {
			case 0:
				return <TodoList />;
			case 1:
				return <CompletedList />;
		}
	};
	return (
		<Box sx={containerStyle}>
			<Tabs
				sx={{ display: "flex" }}
				value={tabIndex}
				onChange={handleTabChange}
			>
				<Tab sx={{ flex: 1 }} label="To do" />
				<Tab sx={{ flex: 1 }} label="Completed" />
			</Tabs>
			<Box sx={todoContainerStyle}>{getContainer(tabIndex)}</Box>
			<InputContainer changeTab={handleTabChange} />
		</Box>
	);
}

export default AppContainer;
