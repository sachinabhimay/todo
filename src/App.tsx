import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, CssBaseline } from "@mui/material";
import AppContainer from "./components/AppContainer";

function App() {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="sm" sx={{ height: "100vh", padding: "2%" }}>
				<AppContainer />
			</Container>
		</>
	);
}

export default App;
