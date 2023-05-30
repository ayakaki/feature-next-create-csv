import { useCSVDownloader } from "react-papaparse";

type Props = {
  filenameprefix: string;
  buttonname: string;
  data: any;
};

//CSVダウンロード関数　呼び出されるときに、パラメータとしてファイル名prefix、ボタン名、JSONデータをもらう
export const CSVDownloadButton: React.FC<Props> = (props: Props) => {
  const { CSVDownloader, Type } = useCSVDownloader();

  //現在日時取得関数 YYYYMMDDHHMMMのフォーマットで現在日時を取得、ファイル名のsuffixとして付ける
  const padZero = (num: number) => {
    return (num < 10 ? "0" : "") + num;
  };

  // 現在日時取得関数
  const getCurrentDatetime = () => {
    const now = new Date();
    return (
      "" +
      now.getFullYear() +
      padZero(now.getMonth() + 1) +
      padZero(now.getDate()) +
      padZero(now.getHours()) +
      padZero(now.getMinutes())
    );
  };

  //ファイル名のsuffixとして現在日時を付ける
  const filename = props.filenameprefix + "_" + getCurrentDatetime();
  return (
    <CSVDownloader
      type={Type.Button}
      filename={filename}
      bom={true}
      config={{ delimiter: "," }}
      data={props.data}
      className="border p-2 rounded-md bg-white text-black"
    >
      {props.buttonname}
    </CSVDownloader>
  );
};
