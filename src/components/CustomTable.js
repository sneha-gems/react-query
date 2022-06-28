import { Table } from "antd";

export default function CustomTable({ columns, dataSource }) {
  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}
