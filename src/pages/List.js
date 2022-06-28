import { useQuery } from "react-query";

import useList from "../api/useList";
import CustomTable from "../components/CustomTable";
// import useCreatePost from "../api/useCreatePost";

export default function List() {
  const { data, error, isLoading, status } = useQuery("users", useList);
  //   useCreatePost();

  if (isLoading) {
    return <>.....Loading</>;
  }

  if (status === "error") {
    return <>Error:{error.message}</>;
  }
  //
  return (
    <>
      <CustomTable dataSource={data?.data} />
    </>
  );
}
