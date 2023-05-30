"use client";

import { CSVDownloadButton } from "./cSVDownLoadButton";
import { useState } from "react";

type JsonData = {
  menu: string;
  id: number;
  neta: string;
};

const menuLists: JsonData[] = [
  {
    menu: "menu1",
    id: 1,
    neta: "いか",
  },
  {
    menu: "menu1",
    id: 2,
    neta: "たこ",
  },
  {
    menu: "menu2",
    id: 1,
    neta: "海鮮丼",
  },
];

const addMenu: JsonData = {
  menu: "menu3",
  id: 5,
  neta: "サーモン",
};

const HomeTemplate: React.FC = (): JSX.Element => {
  const [jsonData, setJsonData] = useState<JsonData[]>(menuLists);
  const [counter, setCounter] = useState<number>(0);

  const addJson = () => {
    setJsonData((prev) => {
      return prev.concat(addMenu);
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="mt-4 container mx-auto">
      <p className="mb-4">
        <button className="border p-2 rounded-md" onClick={addJson}>
          jsonDataの追加
        </button>
      </p>
      <p className="mb-4">jsonDataの追加回数：{counter}</p>
      <CSVDownloadButton
        data={jsonData}
        filenameprefix="export"
        buttonname="CSVエクスポート"
      />
    </div>
  );
};
export default HomeTemplate;
