import "./App.css";
import CenterDiv from "./components/CenterDiv";
import FileExplorer from "./components/FileExplorer";
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
      <FileExplorer explorerData={fileExplorerData} />
    </div>
  );
}

export default App;
