import { useQuery } from "react-query";

import useList from "../api/useList";
import CustomTable from "../components/CustomTable";
import { columns } from "../listCoulmn/data";
import "antd/dist/antd.css";

export default function List() {
  const { data, error, isLoading, status } = useQuery("users", useList);

  if (isLoading) {
    return <>.....Loading</>;
  }

  if (status === "error") {
    return <>Error:{error.message}</>;
  }
  return (
    <>
      <CustomTable columns={columns} dataSource={data?.data} />
    </>
  );
}
