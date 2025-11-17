export type TFileExplorerItem = {
  name: string;
  isFolder: boolean;
  items?: TFileExplorerItem[];
};
