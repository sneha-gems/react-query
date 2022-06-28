import TableHead from "./table/TableHead";

export default function CustomTable({ dataSource }) {
  const columns = Object.keys(dataSource[0]);
  return (
    <>
      <table class="table-auto border-separate border-spacing-2 border border-slate-400">
        <TableHead columns={columns} />
        <tbody>
          {dataSource &&
            dataSource.map((item) => {
              return (
                <tr key={item?.id}>
                  {Object.entries(item).map((key) => (
                    <td class="border border-slate-3">
                      {key[1] ? key[1] : "-"}
                    </td>
                  ))}
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}
