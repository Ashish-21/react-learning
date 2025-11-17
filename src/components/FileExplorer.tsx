import { useState } from "react";
import type { TFileExplorerItem } from "../utils/types";

interface FileExplorerProps {
  explorerData: TFileExplorerItem;
}

const FileExplorer = (props: FileExplorerProps) => {
  const { explorerData } = props;
  const [expand, setExpand] = useState(false);

  const handleFolderClick = () => {
    setExpand((expand) => !expand);
  };

  return explorerData?.isFolder ? (
    <div>
      <span
        style={{
          fontWeight: "bold",
          paddingLeft: "12px",
          cursor: "pointer",
        }}
        onClick={handleFolderClick}
      >
        {explorerData?.name}
        <br />
      </span>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "12px" }}>
        {explorerData?.items?.map((expData) => (
          <FileExplorer explorerData={expData} />
        ))}
      </div>
    </div>
  ) : (
    <span
      style={{
        paddingLeft: "12px",
      }}
    >
      {explorerData?.name}
      <br />
    </span>
  );
};

export default FileExplorer;
