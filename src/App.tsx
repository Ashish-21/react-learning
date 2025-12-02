import "./App.css";
import CenterDiv from "./components/CenterDiv";
import Dashboard from "./components/Dashboard/Dashboard";
import FileExplorer from "./components/FileExplorer";
import TablePagination from "./components/TablePagination/TablePagination";
import fileExplorerData from "./data/fileExplorerData";

function App() {
	return (
		<div
			style={{
				display: "flex",
				padding: "20px",
				height: "100%",
			}}
		>
			<TablePagination />
		</div>
	);
}

export default App;
