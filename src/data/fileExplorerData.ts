import type { TFileExplorerItem } from "../utils/types";

const fileExplorerData: TFileExplorerItem = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "assets",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Counter.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "App.tsx",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default fileExplorerData;
